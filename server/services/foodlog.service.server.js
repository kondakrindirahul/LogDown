module.exports = function (app) {

  var foodlogModel = require('../models/foodlog/foodlog.model.server');

  app.get("/api/user/:userId/foodlog", findFoodlogsByUser);
  app.post("/api/user/:userId/foodlog", createFoodlog);
  app.get("/api/user/:userId/foodlog/:logId", findFoodlogById);
  app.put("/api/user/:userId/foodlog/:logId", updateFoodlog);
  app.delete("/api/user/:userId/foodlog/:logId", deleteFoodlog);

  function createFoodlog(req, res) {
    var userId = req.params['userId'];
    var foodlog = req.body;
    foodlog.clientId = userId;
    delete foodlog._id;

    foodlogModel.createFoodlog(foodlog)
      .then(function (foodlog) {
        foodlogModel.findFoodlogsByUser(userId)
          .then(function (foodlogs) {
            res.json(foodlogs);
          });
      }, function (err) {
        console.log(err);
      });
  }

  function findFoodlogById(req, res) {
    var logId = req.params['logId'];

    foodlogModel.findFoodLogById(logId)
      .then(function (foodlog) {
        res.json(foodlog);
      });
  }

  function findFoodlogsByUser(req, res) {
    var userId = req.params['userId'];
    foodlogModel.findFoodlogsByUser(userId)
      .then(function (foodlogs) {
        res.json(foodlogs);
      });
  }

  function updateFoodlog(req, res) {
    var logId = req.params['logId'];
    var newFoodlog = req.body;

    foodlogModel.updateFoodlog(logId, newFoodlog)
      .then(function (foodlogs) {
        res.json(foodlogs);
      });
  }

  function deleteFoodlog(req, res) {
    var logId = req.params['logId'];

    foodlogModel.deleteFoodlog(logId)
      .then(function (foodlogs) {
        res.json(foodlogs);
      });
  }

};
