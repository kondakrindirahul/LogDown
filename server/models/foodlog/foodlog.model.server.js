var mongoose = require('mongoose');
var foodlogSchema = require('./foodlog.schema.server');
var foodlogModel = mongoose.model('FoodlogModel', foodlogSchema);

foodlogModel.createFoodlog = createFoodlog;
foodlogModel.findFoodlogsByUser = findFoodlogsByUser;
foodlogModel.findFoodLogById = findFoodlogById;
foodlogModel.deleteFoodlog = deleteFoodlog;
foodlogModel.updateFoodlog = updateFoodlog;

module.exports = foodlogModel;

function createFoodlog(foodlog) {
  return foodlogModel.create(foodlog)
}

function findFoodlogsByUser(userId) {
  return foodlogModel
    .find({clientId: userId})
    .populate('clientId', 'username')
    .exec();
}

function findFoodlogById(logId) {
  return foodlogModel.findById(logId);
}

function updateFoodlog(logId, foodlog) {
  return foodlogModel.update({_id: logId}, foodlog);
}

function deleteFoodlog(logId) {
  return foodlogModel.deleteOne({_id: {$in: logId}});
}
