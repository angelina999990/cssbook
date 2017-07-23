import gulp from 'gulp';
import config from './config';

gulp.task('watch', ['browser-sync'], () => {
  gulp.watch(config.styles.src, ['less']);
});
