import { CONSTRAINT } from "../enums";
import EmailValidator from "./EmailValidator";
import UrlValidator from "./UrlValidator";
import InputValidator from "../InputValidator";

export default class ConstraintFactory {
  static createConstraint(constraintId: CONSTRAINT): InputValidator|null {
    switch (constraintId) {
      case CONSTRAINT.EMAIL:
        return new EmailValidator();
      case CONSTRAINT.URL:
        return new UrlValidator();
      default:
        return null;
    }
  }
}