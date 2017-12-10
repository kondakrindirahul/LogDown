import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { FoodlogService } from "../../../services/foodlog.service.client";
import { FoodLog } from "../../../models/foodlog.model.client";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-foodlog-new',
  templateUrl: './foodlog-new.component.html',
  styleUrls: ['./foodlog-new.component.css']
})
export class FoodlogNewComponent implements OnInit {

  userId: String;
  foodlogs: FoodLog[];
  name: String;
  date: Date;
  errorFlag: Boolean;

  constructor(private foodlogService: FoodlogService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  foodlognew() {
    if (this.name) {
      const foodlog: FoodLog = new FoodLog('', this.name, this.userId, this.date);
      this.foodlogService.createFoodlog(this.userId, foodlog)
        .subscribe((foodlogs) => {
          this.router.navigate(['profile', this.userId, 'foodlog']);
        });
    } else {
      this.errorFlag = true;
    }

  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.userId = params['userId'];

        this.foodlogService
          .findFoodlogsByUser(this.userId)
          .subscribe((foodlogs) => {
            this.foodlogs = foodlogs;
          });
      });
  }

}
