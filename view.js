module.exports = function(app) {

  // tell Scroll to skip setting up most of the default routes
  app.config.routes = {
    page: false,
    post: false,
    scroll: false
  };

  // set up a non-view-based index page handler
  app.config.view.views.index.handler = function(req, res) {
    res.header('Content-Type', 'text/html');
    res.send('<pre>' + this.info() + '</pre>');
  };

  // return no view engine information,
  // forcing Scroll to skip setting one up
  return {};
};
