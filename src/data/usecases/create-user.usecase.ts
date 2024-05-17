import { User } from '../../domain/models';
import { CreateUserParams, ICreateUser } from 'src/domain/usecases/create-user';
import { ISaveUserRepository } from '../protocols/db/save-user-repository';
import { IHasher } from '../../infra/criptography/bcrypt/bcrypt-adapter';

export class CreateUserUseCase implements ICreateUser {
  constructor (private readonly hasher: IHasher, private readonly saveUserRepository: ISaveUserRepository) {}

  async execute (params: CreateUserParams): Promise<User> {
    const hashedPassword = await this.hasher.hash(params.password);
    params.password = hashedPassword;
    return this.saveUserRepository.save(params);
  }
}
