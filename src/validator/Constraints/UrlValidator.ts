import InputValidator from "../InputValidator";

export default class UrlValidator implements InputValidator {
  public execute(str: string): string|null {
    const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    return (regex.test(str)) ? null : 'Url invalid';
  }
}