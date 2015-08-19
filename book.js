var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    Product: {type: mongoose.Schema.Types.ObjectId, ref: 'Book', unique: true, required: true, index: true},
	Title: {type: String, required: true},
	Author: {type: String, required: true},
	Price: {type: Number, required: true, min:.01},
	Cover: {type: String}
});

module.exports = bookSchema;