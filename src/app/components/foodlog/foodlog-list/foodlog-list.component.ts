import { Component, OnInit } from '@angular/core';
import { FoodlogService } from "../../../services/foodlog.service.client";
import { FoodLog } from "../../../models/foodlog.model.client";
import { ActivatedRoute } from "@angular/router";
import { User } from "../../../models/user.model.client";
import { UserService } from "../../../services/user.service.client";

@Component({
  selector: 'app-foodlog-list',
  templateUrl: './foodlog-list.component.html',
  styleUrls: ['./foodlog-list.component.css']
})
export class FoodlogListComponent implements OnInit {


  user: User;
  userId: String;
  foodlogs: FoodLog[];

  constructor(private foodlogService: FoodlogService,
              private activatedRoute: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.userId = params['userId'];

        this.foodlogService
          .findFoodlogsByUser(this.userId)
          .subscribe((foodlogs) => {
            this.foodlogs = foodlogs;
          });

        this.userService
          .findUserById(this.userId)
          .subscribe((user) => {
            this.user = user;
          });
      });
  }

}
