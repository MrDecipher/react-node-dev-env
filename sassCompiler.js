// SCSS compiler that uses the node API
const sass = require("node-sass");
const fs = require("fs");
const chalk = require("chalk");

sass.render({
    file: "./src/srcBuild/styles/styles.scss",
    outFile: "./src/production/css"
}, (err, result) => {
    if(!err) {
        console.log(chalk.magenta("Successfully accessed SCSS"));
        fs.writeFile("./src/production/css/styles.css", result.css, (err) => {
            if(!err) {
                /*eslint-disable no-console*/
                console.log(chalk.green.bold("Successfully compiled SCSS ;)"));
            }
        });
    } else {
        // If an error occurs here, then there is a compilation Error
        // Check your SCSS code then
        console.log(chalk.red.bold("Error accessing or compiling SCSS"))
    }
});