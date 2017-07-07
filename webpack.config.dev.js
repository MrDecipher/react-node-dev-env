const webpack = require("webpack");
const path = require('path');
const buildDir = path.resolve(__dirname, "./src/srcBuild/javascript");
const appDir = path.resolve(__dirname, "./src/production");

module.exports = {
    devtool: "source-map",
    entry: buildDir + "/app.js",
    output: {
        path: appDir,
        filename: "bundle.js"
    },
    module: {
        rules:  [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
