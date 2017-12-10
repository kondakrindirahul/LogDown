import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user.service.client";
import { User } from "../../../models/user.model.client";

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService
      .findAllUsers()
      .subscribe((users: User[]) => {
        this.users = users;
      });

  }

}
