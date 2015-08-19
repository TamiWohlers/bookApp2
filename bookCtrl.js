var product = require('../models/book.js');

module.exports = {
  create: function(req, res) {
    var newBook = new book(req.body);
    newProduct.save( function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  read: function(req, res) {
    //console.log('req.query: ', req.query);
    book.find(req.query)
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  update: function(req, res) {
    book.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  delete: function(req, res) {
    console.log(req.params.id);
    book.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  }
};