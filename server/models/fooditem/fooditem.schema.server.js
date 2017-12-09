var mongoose = require('mongoose');
var fooditemSchema = mongoose.Schema({
  name: String,
  logId: String,
  calories: String,
  servingsize: String,
  event: ['breakfast', 'lunch', 'dinner', 'snacks']
}, {collection: 'fooditem'});
module.exports = fooditemSchema;
