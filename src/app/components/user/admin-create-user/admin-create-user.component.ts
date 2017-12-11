import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from "../../../services/user.service.client";
import { Router } from "@angular/router";
import { User } from "../../../models/user.model.client";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-admin-create-user',
  templateUrl: './admin-create-user.component.html',
  styleUrls: ['./admin-create-user.component.css']
})
export class AdminCreateUserComponent implements OnInit {

  @ViewChild('f') usernewform: NgForm;

  name: String;
  password: String;
  mail: String;
  firstname: String;
  lastname: String;
  users: User;

  constructor(private userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }


  newUser() {
    const new_user: User = new User('', this.name, this.password, this.mail, this.firstname, this.lastname);
    this.userService.createUser(new_user)
      .subscribe((users) => {
        this.router.navigate(['admin', 'user']);
      });
  }

  ngOnInit() {
    this.userService.findAllUsers().
      subscribe((users) => {
        this.users = users;
    });
  }

}
