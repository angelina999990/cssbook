import gulp from 'gulp';
import browserSync from 'browser-sync';
import config from './config';

const bs = browserSync.create('cssbook');

gulp.task('browser-sync', ['build'], function() {
  bs.init({
    logFileChanges: true,
    server: {
      baseDir: config.serverBaseDir
    }
  });

  bs.watch([config.styles.destToWatch, config.scripts.destToWatch]).on('change', bs.reload);
});
