var book = require('../models/Book');

module.exports = {

  create: function(req, res) {
    var newBookDocument = new book(req.body);
    newBookDocument.save(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  read: function(req, res) {
    Book.find(req.query)
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  update: function(req, res) {
    Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      function(err, result) {
        if (err) return res.status(500).send(err);
        res.send(result);
      }
    );
  },

  delete: function(req, res) {
    Book.findByIdAndRemove(
      req.params.id,
      function(err, result) {
        if (err) return res.status(500).send(err);
        res.send(result);
      }
    );
  }

};