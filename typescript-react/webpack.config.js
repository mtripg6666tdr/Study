var webpack = require('webpack');
var path    = require('path');

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: path.join(__dirname, "./src/index"),
  module: {
    rules: [{
      test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'ts-loader'
        }]
    }]
  },
  output: {
    path: path.join(__dirname, "./dist/"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  }
};