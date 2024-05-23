import { BcryptAdapter } from '../infra/cryptography/bcrypt/cryptography';
import { db } from '../infra/db/connection';
import { DrizzleUserRepository } from '../infra/db/repositories/user-repository';
import { CreateUserUseCase } from '../usecases/create-user.usecase';

export const createUserFactory = () => {
  const hasher = new BcryptAdapter(12);
  const saveUserRepository = new DrizzleUserRepository(db);
  return new CreateUserUseCase(hasher, saveUserRepository);
};
