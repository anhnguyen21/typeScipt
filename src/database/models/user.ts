import { Model } from 'objection';

export class User extends Model {
  static get tableName() {
    return 'accounts';
  }
}

export class UserModel {
  username: string;
  password: string;

  constructor(name: string, pass: string) {
    this.username = name;
    this.password = pass;
  }
}
