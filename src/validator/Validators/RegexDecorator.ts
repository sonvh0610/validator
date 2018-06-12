import RegexValidator from '../RegexValidator';

export default abstract class RegexDecorator extends RegexValidator {
  protected _validator: RegexValidator;

  constructor(validator: RegexValidator) {
    super();
    this._validator = validator;
  }

  abstract execute(str: string): string|null;
}