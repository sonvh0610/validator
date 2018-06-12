import PerformErrorHandler from "./PerformErrorHandler";

export default class PerformAlert implements PerformErrorHandler {
  perform(error: string) {
    alert(error);
  }
}