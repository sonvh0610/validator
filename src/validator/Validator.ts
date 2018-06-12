import ErrorHandler from "./ErrorHandler";
import InputValidator from './InputValidator';
import { CONSTRAINT } from "./enums";
import ConstraintFactory from "./Constraints/ConstraintFactory";

export default class Validator {
  private _input: string = '';
  private _errors: ErrorHandler[] = [];

  get Input() {
    return this._input
  }

  set Input(input: string) {
    this._input = input;
  }

  private runConstraints(...constraints: CONSTRAINT[]) {
    for (let index = 0; index < constraints.length; index++) {
      const validator: InputValidator|null = ConstraintFactory.createConstraint(constraints[index]);
      if (validator) {
        const error = validator.execute(this._input);
        if (error) {
          this._errors.push(new ErrorHandler(error));
        }
      }
    }
  }

  public execute() {
    this.runConstraints();
  }
}