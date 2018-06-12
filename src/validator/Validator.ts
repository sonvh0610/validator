import InputValidator from './InputValidator';
import { PERFORM_ERROR } from './enums';

export default class Validator {
  static validator: Validator = new Validator();

  public static getInstance(): Validator {
    return this.validator;
  }

  public createValidator(): InputValidator {
    return new InputValidator().setPerformError(PERFORM_ERROR.RED_TEXT);
  }
}