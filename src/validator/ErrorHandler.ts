export default class ErrorHandler {
  private message: string = '';

  get Message(): string {
    return this.message;
  }

  set Message(message: string) {
    this.message = message;
  }

  constructor(message: string) {
    this.message = message;
  }
}