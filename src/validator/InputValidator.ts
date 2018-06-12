import Condition from "./Conditions/Condition";
import { PERFORM_ERROR } from "./enums";
import IPerformErrorHandler from "./PerformError/IPerformErrorHandler";
import PerformErrorFactory from "./PerformError/PerformErrorFactory";

export default class InputValidator {
  protected conditions: Condition[] = [];
  private performError: IPerformErrorHandler | null;
  
  public addCondition(...condition: Condition[]) {
    this.conditions.push(...condition);
  }

  public removeCondition(index: number) {
    this.conditions.splice(index);
  }

  public setPerformError(type: PERFORM_ERROR) {
    this.performError = PerformErrorFactory.create(type);
  }
  
  public execute(str: string) {
    const errors: string[] = [];
    
    for (const condition of this.conditions) {
      if (!condition.checkCondition(str)) {
        errors.push(condition.Error);
      }
    }

    if (this.performError && errors.length > 0) {
      return this.performError.perform(errors[0]);
    }
    return null;
  }
}