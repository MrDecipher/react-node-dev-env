const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("styles", () => {
    return gulp.src("./src/srcBuild/styles/styles.scss")
        .pipe(sourcemaps.init())
        .pipe(sass().on("error", sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./src/production/css"));
});

gulp.task("watch", () => {
    gulp.watch("./src/srcBuild/styles/**/*.scss", ["styles"]);
});