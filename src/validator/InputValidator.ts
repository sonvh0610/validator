import Condition from "./Conditions/Condition";
import { PERFORM_ERROR } from "./enums";
import ErrorHandler from "./ErrorHandler";
import IPerformErrorHandler from "./PerformError/IPerformErrorHandler";
import PerformErrorFactory from "./PerformError/PerformErrorFactory";

export default class InputValidator {
  protected conditions: Condition[] = [];
  private errorMessages: ErrorHandler[] = [];
  private performError: IPerformErrorHandler | null;
  
  public addCondition = (...condition: Condition[]) =>{
    this.conditions.push(...condition);
    return this;
  }

  public resetCondition = (...condition: Condition[]) =>{
    this.conditions = [];
    return this;
  }

  public resetThenAddCondition = (...condition: Condition[]) => {
    this.resetCondition(...condition);
    this.addCondition(...condition);
    return this;
  }

  public removeCondition = (index: number) =>{
    this.conditions.splice(index);
    return this;
  }

  public setPerformError = (type: PERFORM_ERROR) => {
    this.performError = PerformErrorFactory.create(type);
    return this;
  }
  
  public execute = (str: string) =>{
    this.errorMessages = [];
    
    for (const condition of this.conditions) {
      if (!condition.checkCondition(str)) {
        this.errorMessages.push(new ErrorHandler(condition.Error));
      }
    }

    if (this.performError && this.errorMessages.length > 0) {
      return this.performError.perform(this.errorMessages[0].Message);
    }
    return null;
  }


}