var marked = require('marked');

var mdCompilier = function(file, filename) {
  return '<index:>' + marked(file);
};

module.exports = function(app, options) {
  if (options) marked.setOptions(options);
  app.viewExtensions.push('.md');
  app.compilers['.md'] = mdCompilier;
};