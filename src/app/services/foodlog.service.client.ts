import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from "@angular/http";
import 'rxjs/Rx';
import {environment } from "../../environments/environment";
import { Router } from "@angular/router";

import { FoodLog } from "../models/foodlog.model.client";

@Injectable()
export class FoodlogService {
  foodlogs: FoodLog[];

  api = {
    'createFoodlog' : this.createFoodlog,
    'findFoodlogsByUser' : this.findFoodlogsByUser,
    'findFoodLogById' : this.findFoodLogById,
    'updateFoodlog' : this.updateFoodlog,
    'deleteFoodLog' : this.deleteFoodlog
  };

  constructor(private http: Http) {}

  domain_url = environment.baseUrl;

  createFoodlog(userId, foodlog) {
    const url = this.domain_url + '/api/user/' + userId + '/foodlog';
    return this.http.post(url, foodlog)
      .map((response: Response) => {
        return response.json();
      });
  }

  findFoodlogsByUser(userId) {
    const url = this.domain_url+ '/api/user/' + userId + '/foodlog';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findFoodLogById(userId, logId) {
    const url = this.domain_url + '/api/user/' + userId + '/foodlog/' + logId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateFoodlog(userId, updatedlog) {
    const url = this.domain_url + '/api/user/' + userId + '/foodlog/' + updatedlog._id;
    return this.http.put(url, updatedlog)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteFoodlog(userId, logId) {
    const url = this.domain_url + '/api/user/' + userId + '/foodlog/' + logId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }

}
