import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { UserService } from "../../../services/user.service.client";
import { User } from "../../../models/user.model.client";
import { SharedService } from "../../../services/shares.service.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId: String;
  user = {};
  username: String;
  mail: String;
  firstName: String;
  lastName: String;
  password: String;
  errorFlag: Boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private sharedService: SharedService,
              private router: Router) { }

  update() {

    this.sharedService.user['firstName'] = this.firstName;
    this.sharedService.user['lastName'] = this.lastName;
    this.sharedService.user['username'] = this.username;
    this.sharedService.user['mail'] = this.mail;

    this.userService
      .updateUser(this.sharedService.user['_id'], this.sharedService.user)
      .subscribe((users) => {
      });
  }

  logout() {
    this.userService.logout()
      .subscribe((status) => {
        this.router.navigate(['/login']);
      });
  }

  checkUser(user) {
    if (user.roles.indexOf('ADMIN') > -1) {
      this.router.navigate(['/admin', 'user']);
    } else {
      this.errorFlag = true;
    }
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.userId = this.user['_id'];
    this.username = this.user['username'];
    this.mail = this.user['mail'];
    this.firstName = this.user['firstName'];
    this.lastName = this.user['lastName'];
    this.password = this.user['password'];
  }

}
