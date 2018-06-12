export default interface InputValidator {
  execute(str: string): string|null;
}