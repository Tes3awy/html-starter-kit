const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rtlcss = require('rtlcss');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
// const notify = require('gulp-notify');

// Compile and Autoprefix sass and minify css
gulp.task('sass', () => {
  return gulp
    .src('src/sass/main.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(
      postcss([autoprefixer({ browsers: ['last 2 versions'], cascade: true })])
    )
    .pipe(gulp.dest('src/assets/css'))
    .pipe(postcss([cssnano()]))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(gulp.dest('src/assets/css/'));
});

gulp.task('rtlcss', function() {
  return gulp
    .src('src/assets/css/main.css')
    .pipe(postcss([rtlcss()]))
    .pipe(rename({ suffix: '-rtl' }))
    .pipe(gulp.dest('src/assets/css/'))
    .pipe(postcss([cssnano()]))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(gulp.dest('src/assets/css/'));
});

// Minify app.js
gulp.task('min-js', () => {
  return gulp
    .src('src/assets/js/app.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/assets/js/'))
    .pipe(gulp.dest('src/assets/js/'));
});

// Copy JS from node_modules
gulp.task('copy-js', () => {
  return gulp
    .src(['node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('dist/assets/js/'));
});

// Copy CSS from node_modules
gulp.task('copy-css', () => {
  return gulp.src(['node_modules/']).pipe(gulp.dest('dist/assets/css'));
});

// Copy Fonts from node_modules
gulp.task('copy-fonts', () => {
  return gulp.src(['node_modules/']).pipe(gulp.dest('dist/assets/fonts'));
});

// Copy index.html from src to dist
gulp.task('copy-html', () => {
  return gulp.src(['src/*.html']).pipe(gulp.dest('dist/'));
  // .pipe(notify({ message: 'task complete', onLast: true }));
});

// Compress Images
gulp.task('imagemin', () => {
  gulp
    .src('src/assets/images/*')
    .pipe(
      imagemin({
        verbose: true,
        progressive: true,
        optimizationLevel: 4,
        interlaced: true,
      })
    )
    .pipe(rename({ suffix: '-min' }))
    .pipe(gulp.dest('dist/assets/images'));
});

// Watch Task
gulp.task('watch', () => {
  gulp.watch('src/sass/**', ['sass']);
  gulp.watch('src/assets/css/main.css', ['rtlcss']);
  gulp.watch('src/assets/js/app.js', ['min-js']);
  gulp.watch('src/*.html', ['copy-html']);
  gulp.watch('src/assets/images/*', ['imagemin']);
});

// Default Task
gulp.task('default', ['copy-js', 'copy-css', 'copy-fonts']);
