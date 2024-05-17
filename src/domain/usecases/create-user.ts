import { User } from '../models';

export type CreateUserParams = {
  name: string;
  email: string;
  document: string;
  phone?: string;
  password: string;
}

export interface ICreateUser {
  execute: (params: CreateUserParams) => Promise<User>;
}
