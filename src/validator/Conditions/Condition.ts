export default abstract class Condition {
  protected _error: string = '';
  get Error(): string {
    return this._error;
  }
  set Error(error: string) {
    this._error = error;
  }

  abstract checkCondition(str: string): boolean;
}