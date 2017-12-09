import { User } from "../models/user.model.client";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { environment } from "../../environments/environment";

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  domain_url = environment.baseUrl;

  users: User[];

  api = {
    'findUserByCredentials' : this.findUserByCredentials,
    'findUserById' : this.findUserById,
    'updateUser' : this.updateUser
  };

  findUserById(userId) {
    var url = this.domain_url + '/api/user/' + userId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserByCredentials(username, password) {
    var url = this.domain_url + '/api/user?username=' + username + '&password=' + password;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
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
