import InputValidator from "../InputValidator";
// import  from "../Conditionals/RegexConditional";

export default class RegexValidator extends InputValidator {
  private _regex: RegExp;
  get Regex(): RegExp {
    return this._regex;
  }
  set Regex(regex: RegExp) {
    this._regex = regex;
  }

  execute(str: string): string|null {
    return null;
  }
}