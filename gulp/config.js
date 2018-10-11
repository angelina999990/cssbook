const src = "./app/",
    dest = "./build/";

export default {
  src: src,
  dest: dest,
  serverBaseDir: [src, dest],

  styles: {
    src: src + '/**/*.scss',

    scss: {
      srcToBeCompiled: [src + '/styles/app.scss'],
      srcRequiredVueRecompiled: src + 'modules/**/*.scss'
    },
    dest: dest + 'css',
    destToWatch: dest + 'css/*.css'
  },

  scripts: {
    src: src + 'modules/app.js',
    dest: dest + 'js',
    destToWatch: dest + '**/*.js',
    srcToBeCompiled: src + '**/*.vue'
  },

  views: {
    src: src + '**/*.vue'
  },

  assets: {
    src: src + 'assets/**/*',
    dest: dest + 'assets'
  }
};
