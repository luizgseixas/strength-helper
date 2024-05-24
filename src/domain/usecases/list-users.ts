import { User } from '../models';

export interface IListUsers {
  execute: () => Promise<User[]>;
}
