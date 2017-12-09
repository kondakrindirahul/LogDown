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
    'createUser' : this.createUser,
    'findUserByCredentials' : this.findUserByCredentials,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUsername,
    'updateUser' : this.updateUser
  };

  createUser(user) {
    const url = this.domain_url + '/api/user';
    return this.http.post(url, user)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserById(userId) {
    var url = this.domain_url + '/api/user/' + userId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserByUsername(username) {
    const url = this.domain_url + '/api/user/?username=' + username;
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

  updateUser(userId, updateduser) {
    const url = this.domain_url + '/api/user/' + userId;
    return this.http.put(url, updateduser)
      .map((response: Response) => {
        return response.json();
      });
  }
}
