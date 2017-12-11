import { Component, OnInit } from '@angular/core';
import { User } from "../../../models/user.model.client";
import { UserService } from "../../../services/user.service.client";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-edit-user',
  templateUrl: './admin-edit-user.component.html',
  styleUrls: ['./admin-edit-user.component.css']
})
export class AdminEditUserComponent implements OnInit {

  userId: String;
  user: User;
  users: User[];

  constructor(private userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  userUpdate(userId) {
    const updateduser = this.user;
    this.userService
      .updateUser(userId, updateduser)
      .subscribe((users) => {
        this.users = users;
        this.router.navigate(['admin', 'user']);
      });
  }

  userDelete(user) {
    this.userService.deleteUser(user)
      .subscribe((users) => {
        this.users = users;
        this.router.navigate(['admin', 'user']);
      });
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
      this.userId = params['userId'];

      this.userService
        .findUserById(this.userId)
        .subscribe((user) => {
          this.user = user;
        });
      });
  }

}
