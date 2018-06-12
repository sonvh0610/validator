export default abstract class Condition {
  protected errorMessage: string = '';
  get Error(): string {
    return this.errorMessage;
  }
  set Error(error: string) {
    this.errorMessage = error;
  }

  public abstract checkCondition(str: string): boolean;
}