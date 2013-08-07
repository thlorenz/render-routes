# render-routes [![build status](https://secure.travis-ci.org/thlorenz/render-routes.png)](http://travis-ci.org/thlorenz/render-routes)

Give it a routes object and it spits out html that you can load into your browser.

```js
var renderRoutes = require('render-routes');
var express = require('express');

app.get('/routes', function (req, res) {
  res.send(renderRoutes(app.routes));
});
```

![screenshot](https://github.com/thlorenz/render-routes/raw/master/assets/screenshot.png)

## Installation

    npm install render-routes

## API

```
/**
 * Takes a routes hash and returns html to be displayed in your browser.
 *
 * @name exports
 * @function
 * @param allRoutes {Object} i.e. { get: [ { path: '/foo' }, { path: '/bar' } ], post: [ { '/foo' } ] }
 * @return {String} html rendition of your routes
 */
```

## License

MIT
