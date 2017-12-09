var mongoose = require('mongoose');
var foodlogSchema = mongoose.Schema({
  name: String,
  clientId: String,
  dateCreated: Date
}, {collection: 'foodlog'});
module.exports = foodlogSchema;
