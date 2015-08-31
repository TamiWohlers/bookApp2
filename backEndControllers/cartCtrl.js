var cart = require('../models/cartModel');

module.exports = {

  create: function(req, res) {
    var newCartDocument = new cart(req.body);
    newCartDocument.save(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  }
 }


