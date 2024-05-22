export interface IHasher {
  hash: (value: string) => Promise<string>;
}

export interface IHashComparer {
  compare: (value: string, hash: string) => Promise<boolean>;
}
