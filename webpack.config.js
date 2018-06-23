const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: [ 
        "./src/index.js",
        "./src/styles/styles.scss"
    ],
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "./js/bundle.js"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./css/styles.css",
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /(\.css|\.scss|\.sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
};