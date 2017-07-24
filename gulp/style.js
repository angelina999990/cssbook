import gulp         from 'gulp';
import less         from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps   from 'gulp-sourcemaps';
import runSequence  from 'run-sequence';
import browserify   from 'browserify';
import source       from 'vinyl-source-stream';
import buffer       from 'vinyl-buffer';
import handleErrors from './utils/handleError';
import config       from './config';

gulp.task('less', () => {
  return gulp.src(config.styles.less.srcToBeCompiled)
          .pipe(sourcemaps.init())
          .pipe(less())
          .on('error', handleErrors)
          .pipe(autoprefixer({
            browsers: ['last 2 versions']
          }))
          .pipe(sourcemaps.write())
          .pipe(gulp.dest(config.styles.dest));
});

gulp.task('scripts', () => {
  return browserify({
            entries: config.scripts.src
          })
            .bundle()
          .pipe(source('app.js'))
          .pipe(buffer())
          .pipe(sourcemaps.write())
          .on('error', handleErrors)
          .pipe(sourcemaps.write())
          .pipe(gulp.dest(config.scripts.dest));
});

gulp.task('build', () => {
  runSequence(
    'clean',
    ['less', 'scripts']
  );
});
