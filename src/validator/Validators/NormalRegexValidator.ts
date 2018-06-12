import RegexValidator from '../Validators/RegexValidator';

export default class NormalRegexValidator extends RegexValidator {
  constructor(regex: RegExp) {
    super();
    this.Regex = regex;
  }

  public execute(str: string): string|null {
    return (this.Regex.test(str)) ? null : 'Data invalid';
  }
}