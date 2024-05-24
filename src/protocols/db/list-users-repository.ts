import { User } from '../../domain/models';

export interface IListUsersRepository {
  list: () => Promise<User[]>;
}
