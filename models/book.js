var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
      author: {type: String, lowercase: true, required: true},
      title: {type: String, lowercase: true, required: true},
      image: {type: String},
      review: {type: String, required: false},
      rating: {type: Number, required: false},
      id: {type:String},
      genre: {type: String},
      readStatus: {
        type: String,
        lowercase: true,
        enum: [
        'currently reading',
        'have read',
        'want to read',
        'favorites'
      ]
    }
    });


module.exports = mongoose.model('Book', bookSchema);
