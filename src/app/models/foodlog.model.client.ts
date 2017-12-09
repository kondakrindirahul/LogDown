export class FoodLog {
  _id: String;
  name: String;
  clientId: String;
  dateCreated: Date;

  constructor(_id, name, clientId, dateCreated) {
    this._id = _id;
    this.name = name;
    this.clientId = clientId;
    this.dateCreated = dateCreated;
  }
}
