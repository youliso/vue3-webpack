const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require('path');

const port = 3445; //端口

async function startRenderer() {
    const config = require('./webpack.config');
    const options = {
        contentBase: path.resolve("dist"),
        hot: true,
        host: 'localhost'
    };

    webpackDevServer.addDevServerEntrypoints(config, options);
    const compiler = webpack(config);
    const server = new webpackDevServer(compiler, options);

    server.listen(port, 'localhost', () => {
        console.log(`dev server listening on port ${port}`);
    });
}

async function init() {
    await startRenderer();
}

init().then();