import { Component, OnInit } from '@angular/core';
import { FoodlogService } from "../../../services/foodlog.service.client";
import { FoodLog } from "../../../models/foodlog.model.client";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-foodlog-list',
  templateUrl: './foodlog-list.component.html',
  styleUrls: ['./foodlog-list.component.css']
})
export class FoodlogListComponent implements OnInit {

  userId: String;
  foodlogs: FoodLog[];

  constructor(private foodlogService: FoodlogService,
              private activatedRoute: ActivatedRoute) { }

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
