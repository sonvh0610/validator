import { PERFORM_ERROR } from "../enums";
import IPerformErrorHandler from "./IPerformErrorHandler";
import PerformAlert from "./PerformAlert";
import PerformRedText from "./PerformRedText";

export default class PerformErrorFactory {
  public static create(type: PERFORM_ERROR): IPerformErrorHandler | null {
    switch (type) {
      case PERFORM_ERROR.ALERT:
        return new PerformAlert();
      case PERFORM_ERROR.RED_TEXT:
        return new PerformRedText();
      default:
        return null;
    }
  }
}