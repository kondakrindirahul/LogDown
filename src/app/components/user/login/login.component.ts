import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../../../services/user.service.client";
import { SharedService } from "../../../services/shares.service.client";
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;
  base_url: String = environment.baseUrl;
  errorFlag: Boolean;

  constructor(private router: Router,
              private userService: UserService,
              private sharedService: SharedService) { }

  login() {

    if (this.username && this.password) {
      this.userService
        .login(this.username, this.password)
        .subscribe((user) => {
          this.sharedService.user = user;
          this.router.navigate(['/profile', user._id, 'foodlog']);
        });
    } else {
      this.errorFlag = true;
    }

  }

  ngOnInit() {
  }

}
