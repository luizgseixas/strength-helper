import { User } from '../../domain/models';
import { CreateUserParams, ICreateUser } from '../../domain/usecases/create-user';
import { ISaveUserRepository } from '../protocols/db/save-user-repository';
import { isValidCpf } from '../../utils/cpf';
import { IHasher } from '../protocols/cryptography/hash';

export class CreateUserUseCase implements ICreateUser {
  constructor (private readonly hasher: IHasher, private readonly saveUserRepository: ISaveUserRepository) {}

  async execute (params: CreateUserParams): Promise<User> {
    const hashedPassword = await this.hasher.hash(params.password);
    params.password = hashedPassword;
    if (!isValidCpf(params.document)) throw new Error('Documento deve ser um cpf válido');
    return this.saveUserRepository.save(params);
  }
}
