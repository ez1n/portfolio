const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.export = {
  mode: 'development',
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jpg$/,
        loader: "file-loader",
        options: {
          publicPath: "./dist/",
          name: "[name].[ext]?[hash]",
        }
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      publicPath: '/src/',
      template: './src/index.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, 'dist')
  },
}