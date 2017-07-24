import gutil  from 'gulp-util';
import notify from 'gulp-notify';

export default function(error) {
  // Log the error and stop the process
  // to prevent broken code from building
  gutil.log(gutil.colors.red(error));
  // process.exit(1);
}
