const gulp = require('gulp');

const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rtlcss = require('rtlcss');

const uglify = require('gulp-uglify');

const rename = require('gulp-rename');

const imagemin = require('gulp-imagemin');

const browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'rtlcss', 'imagemin', 'min-js'], () => {
  browserSync.init({
    server: './'
  });

  gulp.watch('src/assets/sass/**/*.scss', ['sass', 'rtlcss']);
  gulp.watch('src/assets/js/app.js', ['min-js']);
  gulp.watch('src/assets/images/*', ['imagemin']);
  gulp.watch('./*.html').on('change', browserSync.reload);
});

// Compile and Autoprefix sass and minify css
gulp.task('sass', () => {
  const plugins = [
    autoprefixer({ overrideBrowserslist: ['last 4 versions'], cascade: true }),
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

// Generate RTLCSS file
gulp.task('rtlcss', () => {
  const plugins = [rtlcss(), cssnano()];
  return gulp
    .src('src/assets/css/main.css')
    .pipe(postcss([plugins[0]]))
    .pipe(rename({ suffix: '-rtl' }))
    .pipe(gulp.dest('src/assets/css/'))
    .pipe(postcss([plugins[1]]))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/assets/css/'));
});

// Minify app.js
gulp.task('min-js', () => {
  return gulp
    .src('src/assets/js/app.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/assets/js/'));
});

// Copy JS from node_modules
gulp.task('copy-js', () => {
  return gulp
    .src(['node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('dist/assets/js/'));
});

// Copy CSS from node_modules
gulp.task('copy-css', () => {
  return gulp.src(['node_modules/']).pipe(gulp.dest('dist/assets/css/'));
});

// Copy Fonts from node_modules
gulp.task('copy-fonts', () => {
  return gulp.src(['node_modules/']).pipe(gulp.dest('dist/assets/fonts/'));
});

// Compress Images
gulp.task('imagemin', () => {
  gulp
    .src('src/assets/images/*')
    .pipe(
      imagemin({
        verbose: true,
        progressive: true,
        optimizationLevel: 5,
        interlaced: true
      })
    )
    .pipe(rename({ suffix: '-min' }))
    .pipe(gulp.dest('dist/assets/images/'));
});

// Copy all assets from node_modules at once
gulp.task('copy-assets', ['copy-js', 'copy-css', 'copy-fonts']);

// Default Task
gulp.task('default', ['serve']);
