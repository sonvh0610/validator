import PerformErrorHandler from "./PerformErrorHandler";
import { PERFORM_ERROR } from "../enums";
import PerformAlert from "./PerformAlert";
import PerformRedText from "./PerformRedText";

export default class PerformErrorFactory {
  static create(type: PERFORM_ERROR): PerformErrorHandler | null {
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