const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/js/main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [

    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development'
    }),

    new HtmlWebpackPlugin({
      title: 'Webpack 4 Starter',
      template: './index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    })
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', 'css-loader', 'sass-loader'
        ],
        include: [path.resolve(__dirname, 'src/sass')],
      },
      {
        test: /\.html$/,
        use: 'raw-loader',
        include: [path.resolve(__dirname, 'index.html')],
      }
    ],
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.scss', '.html']
  }
}