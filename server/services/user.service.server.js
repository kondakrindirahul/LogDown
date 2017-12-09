module.exports = function (app) {

  app.get('/api/user/:userId', findUserById);
  app.get('/api/user', findAllUsers);

  var USERS = [
    {_id: "123",
      username: "alice",
      password: "alice",
      mail: "alice@gmail.com",
      firstName: "Alicia",
      lastName: "Wonderlandia"}];

  function findAllUsers(req, res) {
    const username = req.query['username'];
    const password = req.query['password'];

    if(username && password) {
      const user = USERS.find(function (user) {
        return user.username === username && user.password === password;
      });
      if (user) {
        res.json(user);
      } else {
        res.json({});
      }
      return;
    } else if (username) {
      const user = USERS.find(function (user) {
        return user.username === username;
      });
      if (user) {
        res.json(user);
      } else {
        res.json({});
      }
      return;
    }
    // admin asking for all users
    res.json(USERS);
  }

  function findUserById(req, res) {
    const userId = req.params['userId'];
    const user = USERS.find(function (user) {
      return user._id === userId;
    });
    res.json(user);
  }

};
