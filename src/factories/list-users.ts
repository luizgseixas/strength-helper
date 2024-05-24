import { db } from '../infra/db/connection';
import { DrizzleUserRepository } from '../infra/db/repositories/user-repository';
import { ListUsersUseCase } from '../usecases/list-users.usecase';

export const listUsersFactory = () => {
  const listUsersRepository = new DrizzleUserRepository(db);
  return new ListUsersUseCase(listUsersRepository);
};
