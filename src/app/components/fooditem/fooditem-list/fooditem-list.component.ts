import { Component, OnInit } from '@angular/core';
import { FooditemService } from "../../../services/fooditem.service.client";
import { Fooditem } from "../../../models/fooditem.model.client";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-fooditem-list',
  templateUrl: './fooditem-list.component.html',
  styleUrls: ['./fooditem-list.component.css']
})
export class FooditemListComponent implements OnInit {

  userId: String;
  logId: String;
  fooditems: Fooditem[];

  constructor(private fooditemService: FooditemService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.userId = params['userId'];
        this.logId = params['logId'];

        this.fooditemService
          .findItemByLogId(this.userId, this.logId)
          .subscribe((fooditems) => {
            this.fooditems = fooditems;
          });
      });
  }

}
