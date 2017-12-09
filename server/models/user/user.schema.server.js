var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  mail: String,
  firstName: String,
  lastName: String
}, {collection: 'user'});

module.exports = UserSchema;
