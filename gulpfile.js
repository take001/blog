const rootpath      = 'htdocs/';
const cmnpath       = rootpath + 'common/';

const gulp          = require('gulp');
const sass          = require('gulp-sass');
const browserSync   = require('browser-sync').create();
const autoprefixer  = require('gulp-autoprefixer');
const sourcemaps    = require('gulp-sourcemaps');
const plumber       = require('gulp-plumber');
const mmq           = require('gulp-merge-media-queries');
const notify        = require('gulp-notify');
const uglify        = require('gulp-uglify');
const concat        = require("gulp-concat");
const cssmin        = require('gulp-cssmin');
const webpack       = require('webpack-stream');
const pug           = require('gulp-pug');



gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: rootpath
    }
    //proxy: "http://localhost/"
  });
});

gulp.task("browser-reload", () => {
  browserSync.reload();
});

gulp.task('sass', () => {
  gulp.src(cmnpath + 'sass/*.scss')
  .pipe(sourcemaps.init())
  .pipe(plumber({
    errorHandler: notify.onError('Error: <%= error.message %>')
  }))
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(autoprefixer({
    browsers: [
      'last 2 versions'
    ],
    cascade: false
  }))
  .pipe(mmq())
  .pipe(cssmin())
  .pipe(sourcemaps.write('../map'))
  .pipe(gulp.dest(cmnpath + 'css'))
  .pipe(browserSync.stream());
});


gulp.task('js', () =>{
  gulp.src(cmnpath + 'js/es/*.js')
  .pipe(plumber({
    errorHandler: notify.onError('Error: <%= error.message %>')
  }))
  .pipe(webpack({
    output: {
      filename: "script.js"
    },
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:{
          presets: ['env']
        }
      }]
    },

  }))
  .pipe(gulp.dest(cmnpath + 'js/'))
  .pipe(browserSync.stream());
});


gulp.task('watch', () => {
  gulp.watch(cmnpath + 'sass/**/*.scss',['sass']);
  gulp.watch(cmnpath + 'js/es/*.js',['js']);
  gulp.watch(
    [
      rootpath  +  '**/*.html',
      rootpath  +  '**/*.php'
    ],
    ['browser-reload']);
});


gulp.task('default', ['browser-sync','watch']);
