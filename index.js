'use strict';

var Handlebars    =  require('handlebars');
var fs            =  require('fs');
var path          =  require('path');
var prepareRoutes =  require('./lib/prepare-routes');

var templateHbs = fs.readFileSync(path.join(__dirname, 'lib', 'template.hbs'), 'utf8');
var template = Handlebars.compile(templateHbs);

/**
 * Takes a routes hash and returns html to be displayed in your browser.
 *
 * @name exports
 * @function
 * @param allRoutes {Object} i.e. { get: [ { path: '/foo' }, { path: '/bar' } ], post: [ { '/foo' } ] }
 * @return {String} html rendition of your routes
 */
var go = module.exports = function (allRoutes) {
  var relevant = prepareRoutes(allRoutes);
  return template(relevant);
};

// Test
/*if (!module.parent) {
  var allRoutes = require('./test/fixtures/express-routes');

  fs.writeFileSync(__dirname + '/test/fixtures/express-routes-rendered.html', go(allRoutes), 'utf8');
}*/
