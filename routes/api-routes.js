
// Dependencies
// =============================================================

// Requiring our models
const db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the PRODUCTS
  app.get('/api/products', function(req, res){
    // Here we add an 'include' property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.OfficeFashion
    db.Products.findAll({
    }).then(function(dbProducts) {
      res.json(dbProducts);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // Get route for retrieving a single product
  app.get('/api/products/:id', function(req, res) {
    // Here we add an 'include' property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.OfficeFashion
    db.Products.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(dbProducts) {
      res.json(dbProducts);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // POST route for saving a new products
  app.post('/api/products', function(req, res) {
    db.Products.create(req.body).then(function(dbProducts) {
      res.json(dbProducts);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  app.post('/api/users', function(req, res) {
    db.users.create(req.body).then(function(dbusers) {
      res.json({success:true, user:dbusers});
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  app.get("/api/department/:department", function(req,res){
    db.Products.findAll({where:{Department:req.params.department}})
    .then(function(dbProducts) {
      res.json(dbProducts);
    }).catch(function(error) {
      res.json({ error: error });
  })
  });

  // PUT route for updating products
  app.put('/api/products/:id', function(req, res) {
    db.Products.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
    }).then(function(dbProducts) {
      res.json(dbPost);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });

  // DELETE route for deleting products
  app.delete('/api/products/:id', function(req, res) {
    db.Products.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbProducts) {
      res.json(dbPost);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });
};
