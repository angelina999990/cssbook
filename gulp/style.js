import gulp from 'gulp';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import config from './config';

gulp.task('less', () => {
  return gulp.src(config.css.src)
          .pipe(less())
          .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
          }))
          .pipe(gulp.dest(config.css.dest));
});
