export class User {
  user: string;
  pass: string;

  constructor(name: string, password: string) {
    this.user = name;
    this.pass = password;
  }
}
