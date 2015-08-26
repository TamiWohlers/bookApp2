
//Modules
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

//initiate app
var app = express();
//middleware
app.use(bodyParser.json());
app.use(express.static(__dirname + '/Public'));
app.use(cors());

//port
var nodeport = 8080;
mongoUri = 'localhost: 27017/order'
mongoose.connect(mongoUri, function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("Connecting to mongo on...", mongoUri);

    app.listen(nodeport, function() {
        console.log('listening on', nodeport)
    });

});



//controllers
var bookCtrl = require('./backEndControllers/bookCtrl');
var userCtrl = require('./backEndControllers/userCtrl');
// var readCtrl = require('./backEndControllers/readCtrl');
// var orderCtrl = require('./controllers/orderCtrl')


//endpoints
// 
app.post('/api/books', bookCtrl.create);
app.post('/api/users', userCtrl.create);
app.get( '/api/books',bookCtrl.read);
app.get('/api/books/all', bookCtrl.readAll);
app.get('/api/users/getId', userCtrl.read) 
// app.get('/api/readBooks/all', readCtrl.getAll);
app.put('/api/books/:id', bookCtrl.update);
app.delete('/api/books/:id', bookCtrl.remove);


