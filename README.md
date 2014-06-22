v# Scroll Viewless View Layer ![Scroll Official Module](http://img.shields.io/badge/scroll-offical-green.svg?style=flat)

A very simple (no dependencies) view layer that does not provide any sort of view engine, making it perfect for APIs and other use cases that don't require a comprehesive view layer (or one at all). This view layer also sets up a few configuration options for you that will prevent Scroll from adding it's default pages and routes, eseentially given you a "blank slate" as far as server endpoints are concerned. However, you still gain all the benefits of models, controllers, and other helpers from Scroll Core.

## Install

```bash
npm install git+ssh://git@github.com:ScrollEngine/view-blank.git --save
```

## Usage
You can either set the view module in your configuration file:

```javascript
{
  "view": {
    "module": "scroll-view-blank"
  }
}
```

Or you can pass in the configuration when creating your server:

```javascript
var scroll = require('scroll-core'),
    app = scroll({
      view: {
        module: 'scroll-view-blank'
      }
    });

app.start();
```
