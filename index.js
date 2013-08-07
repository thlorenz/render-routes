'use strict';

var Handlebars    =  require('handlebars');
var fs            =  require('fs');
var path          =  require('path');
var prepareRoutes =  require('./lib/prepare-routes');

var templateHbs = fs.readFileSync(path.join(__dirname, 'lib', 'template.hbs'), 'utf8');
var template = Handlebars.compile(templateHbs);

var go = module.exports = function (app, restify) {
  var relevant = prepareRoutes(allRoutes);
  return template(relevant);
};

// Test
if (!module.parent) {
  var allRoutes = require('./test/fixtures/express-routes');

  fs.writeFileSync(__dirname + '/test/fixtures/express-routes-rendered.html', go(allRoutes), 'utf8');
}
