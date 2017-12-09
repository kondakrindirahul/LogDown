module.exports = function (app) {
  var db = require('./models/model');
  require("./services/user.service.server")(app);
  require('./services/foodlog.service.server')(app);
  require('./services/fooditem.service.server')(app);
};

