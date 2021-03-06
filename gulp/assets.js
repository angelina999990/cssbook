import gulp         from 'gulp';
import sass         from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps   from 'gulp-sourcemaps';
import changed      from 'gulp-changed';
import runSequence  from 'run-sequence';
import browserify   from 'browserify';
import source       from 'vinyl-source-stream';
import buffer       from 'vinyl-buffer';
import handleErrors from './utils/handleError';
import config       from './config';

gulp.task('scss', () => {
  return gulp.src(config.styles.scss.srcToBeCompiled)
          .pipe(sourcemaps.init())
          .pipe(sass().on('error', handleErrors))
          .pipe(autoprefixer({
            browsers: ['last 2 versions']
          }))
          .pipe(sourcemaps.write())
          .pipe(gulp.dest(config.styles.dest));
});

gulp.task('scripts', () => {
  return browserify({
            entries: config.scripts.src,
            debug: true
          })
            .bundle()
          .pipe(source('app.js'))
          .pipe(buffer())
          .on('error', handleErrors)
          .pipe(gulp.dest(config.scripts.dest));
});

gulp.task('copy', () => {
  gulp.src(config.assets.src)
    // .pipe(changed(config.assets.dest))
    .pipe(gulp.dest(config.assets.dest));
});

gulp.task('build', () => {
  runSequence('clean',
              'scripts',
              'copy',
              'scss',
              () => {
                runSequence('browser-sync');
              }
            );
});
