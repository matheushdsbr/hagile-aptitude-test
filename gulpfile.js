var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', gulp.series(function () {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
}));

gulp.task('watch', gulp.series(function () {
  gulp.watch('src/sass/**/*.scss', gulp.parallel(['sass']));
}));

gulp.task('default', gulp.series(['sass', 'watch']))