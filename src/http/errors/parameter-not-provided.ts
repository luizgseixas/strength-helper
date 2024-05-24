export class ParameterNotProvidedError extends Error {
  public statusCode: number;
  constructor (paramName: string, message?: string) {
    super('ParameterNotProvidedError');
    this.name = 'ParameterNotProvidedError';
    this.message = message ?? `Parameter: ${paramName} was not provided`;
    this.statusCode = 400;
  }
}
