const path = require('path');
const { name } = require('../package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

module.exports = (env) => {
  return {
    mode: env,
    target: 'web',
    entry: {
      app: './src/index.ts'
    },
    output: {
      filename: '[name].bundle.js',
      chunkFilename: '[id].bundle.js',
      path: path.resolve('dist')
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.ts$/,
          loader: 'esbuild-loader',
          options: {
            loader: 'ts',
            target: 'esnext'
          }
        },
        {
          test: /\.css$/,
          use: [{
            loader: miniCssExtractPlugin.loader,
            options: {
              publicPath: './'
            }
          },
            'css-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: miniCssExtractPlugin.loader,
              options: {
                publicPath: './'
              }
            },
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: miniCssExtractPlugin.loader,
              options: {
                publicPath: './'
              }
            },
            'css-loader',
            'less-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif|ico|woff|woff2|eot|ttf|otf)$/,
          type: 'asset/resource'
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json'],
      alias: {
        'vue': '@vue/runtime-dom',
        '@': path.resolve('src')
      }
    },
    optimization: {
      minimize: env === 'production',
      minimizer: [
        new ESBuildMinifyPlugin({
          target: 'esnext'
        })
      ]
    },
    plugins: [
      new miniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
      }),
      new HtmlWebpackPlugin({
        title: name,
        template: './build/index.html'
      }),
      new VueLoaderPlugin()
    ]
  };
};
