export class User {
  _id: String;
  username: String;
  password: String;
  mail: String;
  firstName: String;
  lastName: String;
  roles: String[];

  constructor(_id, username, password, mail, firstName, lastName) {
    this._id = _id;
    this.username = username;
    this.password = password;
    this.mail = mail;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
