const express = require("express");
const app = express();

const path = require("path");
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "../../dist")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../dist/index.html"));
});

/*eslint-disable no-console*/
app.listen(port, () => {
    console.log("Development server is listening on port: " + port);
});