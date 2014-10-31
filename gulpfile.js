var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');

// compile less to css
gulp.task('less', function() {
  return gulp.src('public/styles/main.less')
          .pipe(less())
          .pipe(gulp.dest('public/styles/', {force: true}));
});

// watch changes to less files
gulp.task('watch', function() {
  gulp.watch('public/styles/*.less', ['less']);
});

// watch by default
gulp.task('default', ['watch']);