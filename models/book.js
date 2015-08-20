var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
      author: {type: String, lowercase: true, required: true},
      title: {type: String, lowercase: true, required: true},
      image: {type: String},
      review: {type: String},
      rating: {type: String},
      id: {type:String}
    });


module.exports = mongoose.model('Book', bookSchema);

// bookObject.author = data.items[0].volumeInfo.authors[0];
//             console.log(bookObject.author);
//             bookObject.title = data.items[0].volumeInfo.title;
//             bookObject.image = data.items[0].volumeInfo.imageLinks.smallThumbnail;
//             bookObject.review = data.items[0].searchInfo.textSnippet;
//             bookObject.rating= data.items[0].averageRatings;
//             // console.log($scope.bookObject.review);
//             bookObject.id = data.items[0].id;
