
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


__webpack_public_path__ = '/';

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: __webpack_public_path__,
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/transform-runtime']
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
  ],
};
