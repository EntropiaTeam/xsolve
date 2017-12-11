const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: './bundle.js'
  },
  module: {
    loaders: [
    {
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      loader: 'url-loader'
    },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
    }
  ],
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
    contentBase: './',
    headers: { "Access-Control-Allow-Origin": "*" },
    host: 'localhost',
    port: '3000'
  },
  watch: true,
  plugins: [
    new ExtractTextPlugin('style/main.css', {
        allChunks: true
    })
]
};
