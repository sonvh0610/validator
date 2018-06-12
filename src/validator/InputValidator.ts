import Condition from "./Conditions/Condition";
import PerformErrorHandler from "./PerformError/PerformErrorHandler";
import { PERFORM_ERROR } from "./enums";
import PerformErrorFactory from "./PerformError/PerformErrorFactory";

export default class InputValidator {
  protected _conditions: Condition[];
  private _performError: PerformErrorHandler | null;
  
  addCondition(...condition: Condition[]) {
    this._conditions.push(...condition);
  }

  removeCondition(index: number) {
    this._conditions.splice(index);
  }

  setPerformError(type: PERFORM_ERROR) {
    this._performError = PerformErrorFactory.create(type);
  }
  
  execute(str: string): string[] {
    const errors: string[] = [];
    
    for (const condition of this._conditions) {
      if (condition.checkCondition(str)) {
        errors.push(condition.Error);
      }
    }

    if (this._performError && errors.length > 0) {
      this._performError.perform(errors[0]);
    }

    return errors;
  }
}