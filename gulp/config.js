const src = "../app/",
    dest = "../build/";

export default {
  src: src,
  dest: dest,

  css: {
    src: src + 'less/app.less',
    dest: dest + 'css'
  },

  js: {
    src: src + 'js/app.js',
    dest: dest + 'js/app.js'
  }
};
