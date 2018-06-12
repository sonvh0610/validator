import RegexCondition from './RegexCondition';

export default class UrlCondition extends RegexCondition {
  constructor() {
    super(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);
    this._error = 'Url invalid';
  }
}