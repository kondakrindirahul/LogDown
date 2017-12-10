import { Component, OnInit } from '@angular/core';
import { FooditemService } from "../../../services/fooditem.service.client";
import { Fooditem } from "../../../models/fooditem.model.client";
import { ActivatedRoute } from "@angular/router";
import { FoodLog } from "../../../models/foodlog.model.client";
import { FoodlogService } from "../../../services/foodlog.service.client";

@Component({
  selector: 'app-fooditem-list',
  templateUrl: './fooditem-list.component.html',
  styleUrls: ['./fooditem-list.component.css']
})
export class FooditemListComponent implements OnInit {

  userId: String;
  foodlog: FoodLog;
  logId: String;
  fooditems: Fooditem[];
  breakfast: Fooditem[];
  lunch: Fooditem[];
  dinner: Fooditem[];
  snacks: Fooditem[];

  constructor(private fooditemService: FooditemService,
              private activatedRoute: ActivatedRoute,
              private foodlogService: FoodlogService) { }

  ngOnInit() {

    const bk = 'breakfast';
    const lc = 'lunch';
    const dn = 'dinner';
    const sk = 'snacks';

    this.activatedRoute.params
      .subscribe((params: any) => {
        this.userId = params['userId'];
        this.logId = params['logId'];

        this.fooditemService
          .findItemByLogId(this.userId, this.logId)
          .subscribe((fooditems) => {
            this.fooditems = fooditems;
          });

        this.fooditemService
          .findItemByLogIdEvent(this.userId, this.logId, bk)
          .subscribe((breakfasts) => {
            this.breakfast = breakfasts;
          });

        this.fooditemService
          .findItemByLogIdEvent(this.userId, this.logId, lc)
          .subscribe((lunches) => {
            this.lunch = lunches;
          });

        this.fooditemService
          .findItemByLogIdEvent(this.userId, this.logId, dn)
          .subscribe((dinners) => {
            this.dinner = dinners;
          });

        this.fooditemService
          .findItemByLogIdEvent(this.userId, this.logId, sk)
          .subscribe((snackss) => {
            this.snacks = snackss;
          });

        this.foodlogService
          .findFoodLogById(this.userId, this.logId)
          .subscribe((foodlog) => {
            this.foodlog = foodlog;
          });
      });
  }

}
