const fs = require("fs");
const chalk = require("chalk");
const csso = require("csso");
const css = fs.readFileSync("./src/production/css/styles.css", "utf-8");
const result = csso.minify(css, {
    filename: "./src/production/css/styles.min.css",
    sourceMap: false
});

console.log(chalk.magenta(result.css));

fs.writeFile("./src/production/css/styles.min.css", result.css, (err) => {
    if(err) {
        console.log(chalk.red(err));
    } else {
        console.log(chalk.green("CSS has been successflly compressed"));
    }
});
