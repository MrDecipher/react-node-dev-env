const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: [ 
        "./src/index.js",
        "./src/styles/styles.scss",
        "webpack-hot-middleware/client?reload=true"
    ],
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "./js/bundle.js"
    },
    mode: "development",
    devtool: "source-map",
    plugins: [
        new HtmlWebPackPlugin({
            title: "React Application Title",
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "./css/styles.css",
        }),
        new webpack.HotModuleReplacementPlugin()   
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
                    {
                        loader: "style-loader",
                        options: { sourceMap: true }
                    },
                    {
                        loader: "css-loader",
                        options: { sourceMap: true }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => [
                                require("autoprefixer")
                            ],
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: { sourceMap: true }
                    }
                ]
            }
        ]
    }
};