import { Component, OnInit } from '@angular/core';
import { FoodLog } from "../../../models/foodlog.model.client";
import { FoodlogService } from "../../../services/foodlog.service.client";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-foodlog-edit',
  templateUrl: './foodlog-edit.component.html',
  styleUrls: ['./foodlog-edit.component.css']
})
export class FoodlogEditComponent implements OnInit {

  userId: String;
  foodlogs: FoodLog[];
  logId: String;
  foodlog: FoodLog;
  errorFlag: Boolean;

  constructor(private foodlogService: FoodlogService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  updateFoodlog(logId) {
    this.foodlogService.findFoodLogById(this.userId, logId)
      .subscribe((foodlog) => {
        this.foodlog = foodlog;
      });

    if(this.foodlog.name) {
      const updatedFoodlog = this.foodlog;
      this.foodlogService.updateFoodlog(this.userId, updatedFoodlog)
        .subscribe((foodlogs) => {
          this.foodlogs = foodlogs;
          this.router.navigate(['profile', this.userId, 'foodlog']);
        });
    } else {
      this.errorFlag = true;
    }


  }

  deleteFoodlog() {
    if (this.logId) {
      this.foodlogService
        .deleteFoodlog(this.userId, this.logId)
        .subscribe((foodlog) => {
          this.router.navigate(['/profile/', this.userId, 'foodlog']);
        });
    }
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.userId = params['userId'];
        this.logId = params['logId'];

        // this.foodlogService
        //   .findFoodlogsByUser(this.userId)
        //   .subscribe((foodlogs) => {
        //     this.foodlogs = foodlogs;
        //   });

        this.foodlogService
          .findFoodLogById(this.userId, this.logId)
          .subscribe((foodlog) => {
            this.foodlog = foodlog;
          });
      });
  }

}
