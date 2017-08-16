const fs = require("fs");
const browserify = require("browserify");
const babelify = require("babelify");

/* eslint-disable no-console */
browserify({ debug: true })
    .transform(babelify)
    .require("./src/srcBuild/javascript/app.js", { entry: true })
    .bundle()
    .on("error", (err) => { console.log("Error: " + err.message); })
    .pipe(fs.createWriteStream("./src/production/js/bundle.js"));