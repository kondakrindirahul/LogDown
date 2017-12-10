var mongoose = require('mongoose');
var fooditemSchema = require('./fooditem.schema.server');
var fooditemModel = mongoose.model('FooditemModel', fooditemSchema);

fooditemModel.createFooditem = createFooditem;
fooditemModel.findItemByLogId = findItemByLogId;
fooditemModel.findItemById = findItemById;
fooditemModel.deleteItem = deleteItem;
fooditemModel.findItemByLogIdEvent =findItemByLogIdEvent;
fooditemModel.findItemByEvent = findItemByEvent;

module.exports = fooditemModel;

function createFooditem(fooditem) {
  return fooditemModel.create(fooditem);
}

function findItemByLogId(logId) {
  return fooditemModel
    .find({logId: logId})
    .populate('logId', 'name')
    .exec();
}

function findItemByLogIdEvent(logId, event) {
  return fooditemModel
    .find({logId: logId, event: event})
    .populate('logId', 'name')
    .exec();
}

function findItemByEvent(event) {
  return fooditemModel
    .find({event: event})
    .populate('logId', 'name')
    .exec();
}

// function findItemByTime(time) {
//   return fooditemModel.findOne({event: {$in: time}});
// }

function findItemById(itemId) {
  return fooditemModel.findById(itemId);
}

function deleteItem(itemId) {
  return fooditemModel.deleteOne({_id: {$in: itemId}});
}
