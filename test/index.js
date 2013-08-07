'use strict';
/*jshint asi: true */

var test = require('tap').test
var prepareRoutes = require('../lib/prepare-routes');

test('\nprepares routes to include relevant methods only and be sorted by name', function (t) {

  var allRoutes = require('./fixtures/express-routes');
  var res = prepareRoutes(allRoutes);

  t.deepEqual(
      res
    , [ { path: '/build.js', method: 'GET' },
        { path: '/data/*', method: 'GET' },
        { path: '/routes', method: 'GET' },
        { path: '/data/*', method: 'POST' },
        { path: '/data/*', method: 'PUT' },
        { path: '/data/*', method: 'DELETE' },
        { path: '/data/*', method: 'PATCH' } ]
  )
  t.end()
})
