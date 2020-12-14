var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        "path": path.join(__dirname, "dist"),
        "filename": "bundle.[hash:8].js"
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                loader: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.join(__dirname, "dist/default.html"),
        })
    ],
    devtool: "inline-source-map"
}