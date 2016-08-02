var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var path = {
  css:{
    src:'./src/css',
    dest:'./css',
    vendor:'./src/css/vendor'
  },
  js:{}
};

gulp.task('sass', function(){
  gulp.src(path.css.src + '/*.scss')
    .pipe(sass({
      outputStyle:'compressed'
    }))
    .pipe(gulp.dest(path.css.dest));
});

gulp.task('css_vendor', function(){
  gulp.src(path.css.vendor + '/*.css')
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest(path.css.dest));
});

gulp.task('vue', function(){
  browserify('./src/main.js')
    .bundle()
    .pipe(source('build.js'))
    .pipe(gulp.dest('./js'))
});

gulp.task('watch', ['sass', 'css_vendor'], function(){
  gulp.watch(path.css.src + '/*.scss', ['sass']);
});
