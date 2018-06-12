import ErrorHandler from "./ErrorHandler";

export default class Validator {
  private _input: string = '';
  private _errors: ErrorHandler[] = [];

  get Input() {
    return this._input
  }

  set Input(input: string) {
    this._input = input;
  }

  public execute() {
  }
}