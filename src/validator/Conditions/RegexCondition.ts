import Condition from "./Condition";

export default class RegexCondition extends Condition {
  private _regex: RegExp;
  constructor(regex: RegExp) {
    super();
    this._error = 'Regex invalid';
    this._regex = regex;
  }

  checkCondition(str: string): boolean {
    return this._regex.test(str);
  }
}