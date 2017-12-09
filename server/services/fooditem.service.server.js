module.exports = function (app) {

  var fooditemModel = require('../models/fooditem/fooditem.model.server');

  app.get("/api/user/:userId/foodlog/:logId/item/:time", findItemByLogIdEvent);
  app.get("/api/user/:userId/foodlog/:logId/item", findItemByLogId);
  app.post("/api/user/:userId/foodlog/:logId/item", createFooditem);
  app.delete("/api/user/:userId/foodlog/:logId/item/:itemId", deleteItem);
  app.get("/api/user/:userId/foodlog/:logId/item/:itemId", findLogById);

  function createFooditem(req, res) {
    var logId = req.params['logId'];
    var fooditem = req.body;
    fooditem.logId = logId;
    delete fooditem._id;

    fooditemModel.createFooditem(fooditem)
      .then(function (fooditem) {
        fooditemModel.findItemByLogId(logId)
          .then(function (fooditems) {
            res.json(fooditems);
          });
      }, function (err) {
        console.log(err);
      });
  }

  function findLogById(req, res) {
    var itemId = req.params['itemId'];

    fooditemModel.findItemById(itemId)
      .then(function (fooditem) {
        res.json(fooditem)
      });
  }

  function findItemByLogId(req, res) {
    var logId = req.params['logId'];

    fooditemModel.findItemByLogId(logId)
      .then(function (fooditems) {
        res.json(fooditems);
      });
  }

  function findItemByLogIdEvent(req, res) {
    var logId = req.params['logId'];
    var event = req.params['time'];

    fooditemModel.findItemByLogIdEvent(logId, event)
      .then(function (fooditems) {
        res.json(fooditems);
      });
  }

  function deleteItem(req, res) {
    var itemId = req.params['itemId'];

    fooditemModel.deleteItem(itemId)
      .then(function (fooditems) {
        res.json(fooditems);
      });
  }
};
