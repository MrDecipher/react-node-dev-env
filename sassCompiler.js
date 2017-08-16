const sass = require("node-sass");
const fs = require("fs");
const chalk = require("chalk");

sass.render({
    file: "./src/srcBuild/styles/styles.scss",
    outFile: "./src/production/css"
}, (err, result) => {
    if(!err) {
        console.log(chalk.magenta("No errors during sass styles compilation"));
        fs.writeFile("./src/production/css/styles.css", result.css, (err) => {
            if(!err) {
                /*eslint-disable no-console*/
                console.log(chalk.green.bold("Successfully built css file ;)"));
            }
        });
    }
});