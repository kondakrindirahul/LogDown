export class Fooditem {
  _id: String;
  name: String;
  logId: String;
  calories: String;
  servingSize: String;
  event: ['breakfast', 'lunch', 'dinner', 'snacks'];

  constructor(_id, name, logId, calories, servingSize, event) {
    this._id = _id;
    this.name = name;
    this.logId = logId;
    this.calories = calories;
    this.servingSize = servingSize;
    this.event = event;
  }
}
