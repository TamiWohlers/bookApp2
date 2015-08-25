var book = require('../models/Book');

module.exports = {

  create: function(req, res) {
    var newBookDocument = new book(req.body);
    newBookDocument.save(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  getAll: function(req, res) {
    console.log('in readCtrl getAll');
    book.find()
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send  (result);
    });
  },

}
