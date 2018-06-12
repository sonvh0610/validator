import IPerformErrorHandler from "./IPerformErrorHandler";

export default class PerformAlert implements IPerformErrorHandler {
  public perform(error: string) {
    alert(error);
  }
}