var dest= './build';
var src = './src';
var sassSrc = src + '/styles/**/*.{sass,scss}';

module.exports = {
  browserSync: {
    server: {
      baseDir: dest
    },
    files: ['build/**/*.html'],
    browser: 'google chrome canary'
  },

  html: {
    src: [src + '/views/index.html'],
    dest: dest,
    nunjucks: src + '/views/',
    watch: [src + '/views/**/*.html'],
  },

  svg: {
    src: [src + '/svg/**/*.svg'],
    dest: dest + '/svg/' ,
    watch: [src + '/svg/**/*.svg'],
  },

  sass: {
    src: [sassSrc],
    dest: dest,
    settings: {},
  }
};
