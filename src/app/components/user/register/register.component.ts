import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user.service.client";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: String;
  password: String;
  verify_password: String;

  constructor(private userService: UserService,
              private router: Router) { }

  register(username, password) {
    this.username = username;
    this.password = password;

    this.userService.findUserByUsername(username)
      .subscribe((user) => {
        if (user === null) {
          const new_user = {
            username: this.username,
            password: this.password
          };
          this.userService.createUser(new_user)
            .subscribe((userFromServer) => {
              this.router.navigate(['/profile', userFromServer._id]);
            });
        }
      });

  }

  ngOnInit() {
  }

}
