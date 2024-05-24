export class UserAlreadyRegisteredError extends Error {
  public statusCode: number;
  constructor () {
    super('UserAlreadyRegisteredError');
    this.name = 'UserAlreadyRegisteredError';
    this.message = 'User already registered';
    this.statusCode = 400;
  }
}
