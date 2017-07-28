module.exports = function(source) {

  const options = Object.assign({
    variable: 'scope'
  }, this.query || {});

  return 'module.exports = (render, ' + options.variable + ') => render`' + source + '`';
};
