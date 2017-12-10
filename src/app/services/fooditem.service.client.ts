import { Injectable } from "@angular/core";
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Fooditem } from "../models/fooditem.model.client";

@Injectable()
export class FooditemService {


  constructor(private http: Http) {}

  domain_url = environment.baseUrl;

  api = {
    'createFooditem' : this.createFooditem,
    'findItemByLogId' : this.findItemByLogId,
    'findItemById' : this.findItemById,
    'deleteItem' : this.deleteItem,
    'findItemByLogIdEvent' : this.findItemByLogIdEvent,
  };

  createFooditem(userId, logId, fooditem) {
    const url = this.domain_url + '/api/user/' + userId + '/foodlog/' + logId + '/item';
    return this.http.post(url, fooditem)
      .map((response: Response) => {
        return response.json();
      });
  }

  findItemByLogId(userId, logId) {
    const url = this.domain_url + '/api/user/' + userId + '/foodlog/' + logId + '/item';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findItemByLogIdEvent(userId, logId, event) {
    const url = this.domain_url + '/api/user/' + userId + '/foodlog/' + logId + '/item/' + event;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findItemById(userId, logId, itemId) {
    const url = this.domain_url + '/api/user/' + userId + '/foodlog/' + logId + '/item/' + itemId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteItem(userId, logId, itemId) {
    const url = this.domain_url + '/api/user/' + userId + '/foodlog/' + logId + '/item/' + itemId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}
