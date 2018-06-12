import InputValidator from './InputValidator';

export default class Validator {
  static validator: Validator = new Validator();

  public static getInstance(): Validator {
    return this.validator;
  }

  public createValidator(): InputValidator {
    return new InputValidator();
  }
}