module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "sample.js"
    },
    // production or development
    mode: "development",
    devtool: "inline-source-map",
    watchOptions: {
        ignored: ["/node_modules/"]
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
}