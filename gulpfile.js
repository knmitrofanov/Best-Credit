const gulp = require("gulp");

gulp.task("default", () => {

});

gulp.task("lint:js", () => {

});

gulp.task("lint:css", () => {

});

gulp.task("lint", ["lint:js"]);

gulp.task("build", ["clean", "lint", "compile"]);

gulp.task("compile:js", () => {
    gulp.src("/**/*.js");
});