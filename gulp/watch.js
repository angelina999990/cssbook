import gulp from 'gulp';
import config from './config';

gulp.task('watch', ['build'], () => {
  gulp.watch(config.styles.src, ['scss']);
  gulp.watch([config.scripts.src, config.styles.scss.srcRequiredVueRecompiled], ['scripts']);
  gulp.watch(config.views.src, ['scripts']);
});
