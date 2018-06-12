import Condition from "./Condition";

export default class IsNumberCondition extends Condition {
  constructor() {
    super();
    this.errorMessage = 'Number invalid';
  }

  public checkCondition(str: string): boolean {
    return !Number.isNaN(Number(str));
  }
}