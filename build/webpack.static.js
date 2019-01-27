/*
* @Author: Kasper Sebb' brandt
* @Date:   2018-10-31 00:18:27
* @Last Modified by:   Kasper Sebb' brandt
* @Last Modified time: 2018-11-27 20:10:48
*/
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const basePack = require('./webpack.base.js');

module.exports = (env, argv) => {
  return {
    entry: './src/index.ssr.js',
    devtool: 'source-map',
    output: {
      filename: 'bundle.[contenthash].js',
      path: path.resolve(process.cwd(), 'dist'),

      /* IMPORTANT!
       * You must compile to UMD or CommonJS
       * so it can be required in a Node context: */
      libraryTarget: 'umd'
    },

    resolve: basePack.resolve,

    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            "to-string-loader",
            "css-loader",
            "postcss-loader"
          ]
        },
        ...basePack.module.rules
      ]
    },

    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          extractComments: true
        }),
        new OptimizeCssAssetsPlugin()
      ]
    },

    plugins: [
      new StaticSiteGeneratorPlugin({
        paths: [
          '/',
          '/home'
        ],
        crawl: true,
        globals: {
          window: {}
        }
      }),
      //new BundleAnalyzerPlugin()
    ]
  };
}