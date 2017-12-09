var mongoose = require('mongoose');
var UserSchema = require('./user.schema.server');
var UserModel = mongoose.model("UserModel", UserSchema);

UserModel.findUserById = findUserById;
UserModel.createUser = createUser;
UserModel.findAllUsers = findAllUsers;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.findUserByUsername = findUserByUsername;
UserModel.updateUser = updateUser;

module.exports = UserModel;

function createUser(user) {
  return UserModel.create(user);
}

function findAllUsers() {
  UserModel.find(function (err, docs) {
    console.log(docs);
  });
}

function findUserById(userId) {
  return UserModel.findById(userId);
}

function findUserByCredentials(username, password) {
  return UserModel.findOne({username: username, password: password});
}

function findUserByUsername(username) {
  return UserModel.findOne({username: username});
}

function updateUser(userId, user) {
  return UserModel.update({_id: userId}, user);
}
