var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
      user: {type: String, required: true, unique: true},
      password: {type: String, required: true},
      userId: {type: Number, required: false, unique: true},
      email: {type: String, required: false, unique: true}
    });
    


module.exports = mongoose.model('user', userSchema);