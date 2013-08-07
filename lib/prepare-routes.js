'use strict';

var relevantMethods = [ 'GET', 'POST', 'PUT', 'DELETE', 'PATCH' ];

module.exports = function relevantRoutes (allRoutes) {

  return Object.keys(allRoutes)
    .filter(function (k) {
      return ~relevantMethods.indexOf(k.toUpperCase());
    })
    .reduce(function (acc, k) {
      var routes = allRoutes[k];
      var method = k.toUpperCase();
      return acc.concat(
        routes
          .sort(function (a, b) { return a.path > b.path; })
          .map(function (x) { return { path: x.path, method: method}; })
      );
    }, []);
};
