var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
      book: {type: String, lowercase: true, required: true},
      title: {type: String, lowercase: true, required: true},
      author: {type: String, lowercase: true, required: true},
      image: {type: String},
    });


module.exports = mongoose.model('Book', bookSchema);

