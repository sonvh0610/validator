export default class ErrorHandler {
  protected _message: string;

  constructor(message: string) {
    this._message = message
  }

  get Message() {
    return this._message;
  }

  set Message(message: string) {
    this._message = message;
  }
}