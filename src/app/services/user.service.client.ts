import { User } from "../models/user.model.client";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {

  users: User[] = [
    new User('123', 'alice', 'alice', 'alice@gmail.com', 'Alice', 'Wonderland')
  ];

  api = {
    'findUserByCredentials' : this.findUserByCredentials,
    'findUserById' : this.findUserById,
    'updateUser' : this.updateUser
  };

  findUserById(userId) {
    return this.users.find(function (user) {
      return user._id === userId
    });
  }

  findUserByCredentials(username, password) {
    return this.users.find(function (user) {
      return user.username === username && user.password === password;
    });
  }

  updateUser(user) {
    for(let i = 0; i < this.users.length; i++) {
      const  _user = this.users[i];
      if(_user._id === user._id) {
        this.users[i].firstName = user.firstName;
        this.users[i].lastName = user.lastName;
      }
    }
  }
}
