import Condition from "./Condition";

declare type CustomCallback = (str: string) => string;

export default class CustomCondition extends Condition {
  private callback: CustomCallback;
  constructor(callback: CustomCallback) {
    super();
    this.callback = callback;
  }

  public checkCondition(str: string): boolean {
    const error: string = this.callback(str);
    this.errorMessage = error;
    return error.length === 0;
  }
}