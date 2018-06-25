const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "development",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "./js/bundle.js"
    }
});