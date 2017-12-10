import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user.service.client";
import { Router } from "@angular/router";
import { SharedService } from "../../../services/shares.service.client";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: String;
  password: String;
  verify_password: String;
  errorFlag1: Boolean;
  errorFlag2: Boolean;

  constructor(private userService: UserService,
              private router: Router,
              private sharedService: SharedService) { }

  register() {

    if(this.username && this.password && this.verify_password) {
      if (this.password !== this.verify_password) {
        this.errorFlag1 = true;
        return;
      }
      this.userService.register(this.username, this.password)
        .subscribe((user) => {
          this.sharedService.user = user;
          this.router.navigate(['/profile']);
        });
    } else {
      this.errorFlag2 = true;
    }


  }

  ngOnInit() {
  }

}
