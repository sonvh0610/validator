import Condition from "./Condition";

export default class RegexCondition extends Condition {
  private regex: RegExp;
  constructor(regex: RegExp) {
    super();
    this.errorMessage = 'Not match with defined Regex';
    this.regex = regex;
  }

  public checkCondition(str: string): boolean {
    return this.regex.test(str);
  }
}