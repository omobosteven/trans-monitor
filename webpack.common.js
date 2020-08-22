const path = require('path');

module.exports = {
  entry: {
    main: './src/app.js',
  },
  output: {
    filename: '[name].[hash].js',
    publicPath: '/',
    path: path.resolve('./build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/'node_modules'/],
        use: [{ loader: 'babel-loader?cacheDirectory=true' }],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: '@svgr/webpack',
            options: {
              babel: false,
              icon: true,
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
          {
            loader: 'url-loader?limit=10000&mimetype=application/font-woff',
          },
        ],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(jpg|jpeg|png|gif|pdf|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name]-[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
};
