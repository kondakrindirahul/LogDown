import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../services/user.service.client";
import { Router } from "@angular/router";
import { User } from "../../../models/user.model.client";

@Component({
  selector: 'app-admin-create-user',
  templateUrl: './admin-create-user.component.html',
  styleUrls: ['./admin-create-user.component.css']
})
export class AdminCreateUserComponent implements OnInit {

  name: String;
  password: String;

  constructor(private userService: UserService,
              private router: Router) { }

  // foodlognew() {
  //   if (this.name) {
  //     const foodlog: FoodLog = new FoodLog('', this.name, this.userId, this.date);
  //     this.foodlogService.createFoodlog(this.userId, foodlog)
  //       .subscribe((foodlogs) => {
  //         this.router.navigate(['profile', this.userId, 'foodlog']);
  //       });
  //   } else {
  //     this.errorFlag = true;
  //   }
  //
  // }

  newUser() {
    const new_user: User = new User('', this.name, this.password, '', '', '');
    this.userService.createUser(new_user)
      .subscribe((users) => {
        this.router.navigate(['/admin', 'user']);
      });
  }

  ngOnInit() {
  }

}
