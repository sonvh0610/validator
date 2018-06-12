import RegexDecorator from "./RegexDecorator";

export default class EmailValidator extends RegexDecorator {
  public execute(str: string): string|null {
    this.Regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = this._validator.execute(str);
    return (!result) ? null : 'Email invalid';
  }
}