// for remote
var connectionString = 'mongodb://127.0.0.1:27017/test';

// check if running remotely
if(process.env.MLAB_USERNAME_WEBDEV) {
  var username = process.env.MLAB_USERNAME_WEBDEV;
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds133816.mlab.com:33816/heroku_c9bsg11k'
}

// model.js is responsible for connecting to the database
var mongoose = require('mongoose');
var db = mongoose.connect(connectionString, { useMongoClient: true});
module.exports = db;


// // local DB
// var mongoose = require('mongoose');
// var db = mongoose.connect('mongodb://localhost/LogDownProjectDB', {useMongoClient: true});
// module.exports = db;
