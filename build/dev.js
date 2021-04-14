const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

async function start() {
  let port = 0;
  try {
    port = fs.readFileSync(path.resolve('.port'), 'utf8');
  } catch (e) {
    throw 'not found .port';
  }
  const config = require('./webpack.config')('development');
  const options = {
    contentBase: path.resolve('dist'),
    hot: true,
    host: 'localhost'
  };
  webpackDevServer.addDevServerEntrypoints(config, options);
  const compiler = webpack(config);
  const server = new webpackDevServer(compiler, options);
  server.listen(port, 'localhost', () => {
  });
  server.invalidate(() => {
    console.log(`Project is running at http://localhost:${port}`);
  });
}

start().then();