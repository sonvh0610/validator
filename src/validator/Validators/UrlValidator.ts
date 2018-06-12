import RegexDecorator from "./RegexDecorator";

export default class UrlValidator extends RegexDecorator {
  public execute(str: string): string|null {
    this.Regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    const result = this._validator.execute(str);
    return (!result) ? null : 'Url invalid';
  }
}