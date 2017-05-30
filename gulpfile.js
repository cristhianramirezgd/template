var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'), 
    autoprefixer = require('gulp-autoprefixer'),
    gp_sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch');
// Sass Compile an minify
gulp.task('compile-sass', function () {
    gulp.src('css/scss/*.scss') // path to your file
    .pipe(gp_sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(minifyCSS())
    .pipe(gp_concat('app.min.css'))
    .pipe(gp_sourcemaps.write('./'))
    .pipe(gulp.dest('arquivos/'));
});
//Gulp Watch
gulp.task('default', ['compile-sass'], function() {
   // watch for CSS changes
   gulp.watch('css/scss/**/*.scss', function() {
      // run styles upon changes
      gulp.run('compile-sass');
   });
});
