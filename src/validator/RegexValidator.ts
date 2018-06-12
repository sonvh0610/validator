import InputValidator from "./NormalValidator";

export default abstract class RegexValidator implements InputValidator {
  private _regex: RegExp;
  get Regex(): RegExp {
    return this._regex;
  }
  set Regex(regex: RegExp) {
    this._regex = regex;
  }

  abstract execute(str: string): string|null;
}