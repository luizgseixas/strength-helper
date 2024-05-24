import { User } from '../../domain/models';
import { CreateUserParams } from '../../domain/usecases/create-user';

export interface ISaveUserRepository {
  save: (user: CreateUserParams) => Promise<User>;
}
