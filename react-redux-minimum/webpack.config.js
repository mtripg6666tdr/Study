const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: {
          loader: "ts-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  entry: path.join(__dirname, "./src/index"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js"
  },
  devServer: {
    historyApiFallback: true
  }
}