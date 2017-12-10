export class Fooditem {
  _id: String;
  name: String;
  logId: String;
  calories: String;
  servingSize: String;
  brandname: String;
  servingUnit: String;
  fatContent: String;
  event: ['breakfast', 'lunch', 'dinner', 'snacks'];

  constructor(_id, name, logId, calories, servingSize, brandname, servingUnit, fatContent, event) {
    this._id = _id;
    this.name = name;
    this.logId = logId;
    this.calories = calories;
    this.servingSize = servingSize;
    this.brandname = brandname;
    this.servingUnit = servingUnit;
    this.fatContent = fatContent;
    this.event = event;
  }
}
