const express = require("express");
const app = express();

// ======================= Webpack Requirements ================================
const webpack = require("webpack");
const webpackConfig = require("../../webpack.config.js");
const compiler = webpack(webpackConfig);
const webpackMiddleware = require("webpack-dev-middleware");

const path = require("path");
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "../production")));

app.use(webpackMiddleware(compiler, {
    noInfo: false,
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true }
}));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../production/index.html"));
});

/*eslint-disable no-console*/
app.listen(port, () => {
    console.log("Development server is listening on port: " + port);
});
