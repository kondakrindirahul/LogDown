import { User } from "../models/user.model.client";
import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions } from "@angular/http";
import 'rxjs/Rx';
import { environment } from "../../environments/environment";
import {SharedService} from "./shares.service.client";
import {Router} from "@angular/router";

@Injectable()
export class UserService {

  options: RequestOptions = new RequestOptions();

  constructor(private http: Http,
              private sharedService: SharedService,
              private router: Router) {}

  domain_url = environment.baseUrl;

  users: User[];

  api = {
    'login' : this.login,
    'register' : this.register,
    'logout' : this.logout,
    'loggedIn' : this.loggedIn,
    'createUser' : this.createUser,
    'findUserByCredentials' : this.findUserByCredentials,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUsername,
    'findAllUsers' : this.findAllUsers,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser
  };

  register(username, password) {
    const url = this.domain_url + '/api/register';
    const credentials = {
      username: username,
      password: password
    };
    this.options.withCredentials = true;
    return this.http.post(url, credentials, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  login(username, password) {
    const url = this.domain_url + '/api/login';
    const credentials = {
      username: username,
      password: password
    };
    this.options.withCredentials = true;
    return this.http.post(url, credentials, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  isAdmin() {
    const url = this.domain_url + '/api/admin/isAdmin';
    this.options.withCredentials = true;
    return this.http.get(url, this.options)
      .map((res: Response) => {
        const user = res.json();
        if (user !== 0) {
          this.sharedService.user = user; return true;
        } else {
          this.router.navigate(['/login']); return false;
        }
      });
  }

  logout() {
    const url = this.domain_url + '/api/logout';
    this.options.withCredentials = true;
    return this.http.post(url, '', this.options)
      .map((status) => {
        return status;
      });
  }

  loggedIn() {
    const url = this.domain_url + '/api/loggedIn';
    this.options.withCredentials = true;
    return this.http.post(url, '', this.options)
      .map((res: Response) => {
        const user = res.json();
        if (user !== 0) {
          this.sharedService.user = user;
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      });
  }

  findAllUsers() {
    const url = this.domain_url + '/api/admin/user';
    this.options.withCredentials = true;
    return this.http.get(url, this.options)
      .map((res: Response) => {
        return res.json();
      });
  }

  createUser(user) {
    const url = this.domain_url + '/api/user';
    return this.http.post(url, user)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserById(userId) {
    const url = this.domain_url + '/api/user/' + userId;
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

  deleteUser(user) {
    const url = this.domain_url + '/api/user/' + user._id;
    return this.http.delete(url, user)
      .map((response: Response) => {
        return response.json();
      });
  }
}
