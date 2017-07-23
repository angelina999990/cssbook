import gulp         from 'gulp';
import less         from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps    from 'gulp-sourcemaps';
import browserSync  from 'browser-sync';
import handleErrors from './utils/handleError.js';
import config from './config';

gulp.task('less', () => {
  return gulp.src(config.styles.less.srcToBeCompiled)
          .pipe(sourcemaps.init())
          .pipe(less())
          .on('error', handleErrors)
          .pipe(autoprefixer({
            browsers: ['last 2 versions']
          }))
          .pipe(sourcemaps.write())
          .pipe(gulp.dest(config.styles.dest))
});
