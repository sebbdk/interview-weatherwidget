/*
* @Author: Kasper Sebb' brandt
* @Date:   2018-10-31 00:18:45
* @Last Modified by:   Kasper Sebb' brandt
* @Last Modified time: 2018-11-27 20:11:08
*/
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

const basePack = require('./webpack.base.js');

module.exports = (env, argv) => { 
  return {
    entry: './src/dev.index.js',
    devtool: 'source-map',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',

    resolve: basePack.resolve,
    
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                publicPath: '../'
              }
            },
            "css-loader"
          ]
        },
        ...basePack.module.rules
      ]
    },
   
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        inject: true,
        template: 'src/dev.index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
      }),
    ]
  };
}