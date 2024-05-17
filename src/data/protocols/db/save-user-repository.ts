import { User } from 'src/domain/models';
import { CreateUserParams } from 'src/domain/usecases/create-user';

export interface ISaveUserRepository {
  save: (user: CreateUserParams) => Promise<User>;
}
