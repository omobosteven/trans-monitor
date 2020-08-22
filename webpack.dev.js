const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge.smart(common, {
  mode: 'development',
  entry: {
    main: './src/app.js',
  },
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/index.html',
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 3045,
    historyApiFallback: true,
  },
});
