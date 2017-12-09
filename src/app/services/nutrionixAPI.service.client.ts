import { Injectable } from "@angular/core";
import { Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class NutrionixAPIService {

  constructor(private http: Http) {}

  api = {
    'searchFoodByName' : this.searchFoodByName
  };

  searchFoodByName(name: String) {
    const url = 'https://api.nutritionix.com/v1_1/search/' + name +
      '?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=e6ce2c51&appKey=82b443c9f9191e8bc996127502a53d00';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}
