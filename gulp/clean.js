import gulp from 'gulp';
import clean from 'gulp-clean';
import config from './config';

gulp.task('clean', () => {
  gulp.src(config.dest)
    .pipe(clean());
});
