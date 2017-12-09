import { Component, OnInit } from '@angular/core';
import { NutrionixAPIService } from "../../services/nutrionixAPI.service.client";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fooditem: String;
  result: Object;
  msgFlag: Boolean;

  searchFood(fooditem: String) {
    this.nutrionixService.searchFoodByName(this.fooditem)
      .subscribe((result) => {
        this.result = result.hits;
        console.log(this.result);
      });
  }

  displayMessage() {
    this.msgFlag = true;
  }

  constructor(private nutrionixService: NutrionixAPIService) { }

  ngOnInit() {
  }

}
