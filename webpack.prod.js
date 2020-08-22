const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = merge.smart(common, {
  mode: 'production',
  entry: {
    main: './src/app.js',
  },
  output: {
    filename: '[name].[hash].js',
    publicPath: '/',
    path: path.resolve('./dist'),
  },
  module: {
    // rules: [
    //   {
    //     test: /\.s(a|c)ss$/,
    //     use: [
    //       {
    //         loader: MiniCssExtractPlugin.loader,
    //         options: {
    //           publicPath: (resourcePath, context) => {
    //             return path.relative(path.dirname(resourcePath), context) + '/';
    //           },
    //         },
    //       },
    //       {
    //         loader: 'css-loader',
    //         options: {
    //           importLoaders: 1,
    //           modules: {
    //             localIdentName: '[local]__[hash:base64:5]',
    //           },
    //         },
    //       },
    //       {
    //         loader: 'sass-loader',
    //       },
    //     ],
    //   },
    // ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
      ignoreOrder: false,
    }),
  ],
});
