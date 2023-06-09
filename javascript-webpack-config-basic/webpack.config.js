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
    }
}