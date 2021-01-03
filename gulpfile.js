const gulp = require('gulp');

const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rtlcss = require('rtlcss');

const uglify = require('gulp-uglify');

const rename = require('gulp-rename');

const browserSync = require('browser-sync').create();

const log = console.log;
const chalk = require('chalk');

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'rtlcss', 'min-js'], () => {
  browserSync.init({
    server: {
      baseDir: './'
    },
    watch: true,
    logLevel: "info",
    logPrefix: "Starter Kit"
  });

  gulp.watch('src/sass/**/*.scss', ['sass', 'rtlcss']).on('change', browserSync.reload);
  gulp.watch('src/assets/js/app.js', ['min-js']).on('change', browserSync.reload);
  gulp.watch('./*.html').on('change', browserSync.reload);
});

// Compile and Autoprefix scss and minify css
gulp.task('sass', () => {
  const plugins = [
    autoprefixer({ cascade: true, ignoreUnknownVersions: true }),
    cssnano()
  ];
  return gulp
    .src('src/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(postcss([plugins[0]]))
    .pipe(gulp.dest('src/assets/css/'))
    .pipe(postcss([plugins[1]]))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/assets/css/'))
    .pipe(browserSync.stream());
});

// Generate RTL CSS file
gulp.task('rtlcss', () => {
  const plugins = [
    rtlcss(),
    cssnano()
  ];
  return gulp
    .src('src/assets/css/main.css')
    .pipe(postcss([plugins[0]]))
    .pipe(rename({ suffix: '-rtl' }))
    .pipe(gulp.dest('src/assets/css/'))
    .pipe(postcss([plugins[1]]))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/assets/css/'))
    .pipe(browserSync.stream());
});

// Minify app.js
gulp.task('min-js', () => {
  return gulp
    .src('src/assets/js/app.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/assets/js/'))
    .pipe(browserSync.stream());
});

// Copy JS from node_modules
gulp.task('copy-js', () => {
  return gulp
    .src(['node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('dist/assets/js/'));
});

// Copy CSS from node_modules
gulp.task('copy-css', () => {
  return gulp
    .src(['node_modules/normalize.css/normalize.css'])
    .pipe(gulp.dest('dist/assets/css/'));
});

// Copy Fonts from node_modules
gulp.task('copy-fonts', () => {
  return gulp
    .src([''])
    .pipe(gulp.dest('dist/assets/fonts/'));
});

// Copy all assets from node_modules at once
gulp.task('copy-assets', ['copy-js', 'copy-css', 'copy-fonts']);

// Default Task
gulp.task('default', ['serve'], () => {
  log(chalk.green('Gulp Started Successfully'));
});
