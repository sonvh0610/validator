import Condition from "./Condition";

declare type CustomCallback = (str: string) => string;

export default class CustomCondition extends Condition {
  private _callback: CustomCallback;
  constructor(callback: CustomCallback) {
    super();
    this._callback = callback;
  }

  checkCondition(str: string): boolean {
    const error: string = this._callback(str);
    this._error = error;
    return error.length === 0;
  }
}