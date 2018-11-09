// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require('path');

// Routes
// =============================================================
module.exports = function(app) {

  //the below route just handles the HTML page that the user gets sent to.
  // index route loads view.html
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/index.html'));
  });

  
};
