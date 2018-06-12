import Condition from "./Conditions/Condition";

export default class InputValidator {
  protected _conditions: Condition[];
  
  addCondition(...condition: Condition[]) {
    this._conditions.push(...condition);
  }

  removeCondition(index: number) {
    this._conditions.splice(index);
  }
  
  execute(str: string): string[] {
    const errors: string[] = [];
    
    for (const condition of this._conditions) {
      if (condition.checkCondition(str)) {
        errors.push(condition.Error);
      }
    }

    return errors;
  }
}