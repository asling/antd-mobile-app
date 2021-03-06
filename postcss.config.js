var pxtorem = require('postcss-pxtorem');
var autoprefixer = require('autoprefixer');
module.exports = {
  plugins: [
    autoprefixer({
      browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
    }),
    pxtorem({ rootValue: 100, propWhiteList: [] }),
  ]
}