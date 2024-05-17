import bcrypt from 'bcrypt';

export interface IHasher {
  hash: (value: string) => Promise<string>;
}

export interface IHashComparer {
  compare: (value: string, hash: string) => Promise<boolean>;
}

export class BcryptAdapter implements IHasher, IHashComparer {
  constructor (private readonly salt: number) {}

  async hash (value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt);
    return hash;
  }

  async compare (value: string, hash: string): Promise<boolean> {
    const isValid = await bcrypt.compare(value, hash);
    return isValid;
  }
}
