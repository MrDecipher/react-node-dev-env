const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

let pathsToClean = [
    "./dist"
]

module.exports = {
    entry: [ 
        "./src/index.js",
        "./src/styles/styles.scss"
    ],
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "./js/bundle.min.js"
    },
    mode: "production",
    plugins: [
        new CleanWebpackPlugin(pathsToClean),
        new HtmlWebPackPlugin({
            title: "React Application Title",
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "./css/styles.min.css",
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
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: { sourceMap: false }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => [
                                require("autoprefixer")
                            ],
                            sourceMap: false
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: { sourceMap: false }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin(),
            new OptimizeCssAssetsPlugin({})
        ]
    }
};