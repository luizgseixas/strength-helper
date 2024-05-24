import { User } from '../domain/models';
import { CreateUserParams, ICreateUser } from '../domain/usecases/create-user';
import { ISaveUserRepository } from '../protocols/db/save-user-repository';
import { isValidCpf } from '../utils/cpf';
import { IHasher } from '../protocols/cryptography/hash';
import { IFindUserByDocumentOrEmailRepository } from '../protocols/db/find-user-by-document-or-email-repository';
import { UserAlreadyRegisteredError } from '../http/errors/user-already-registered';

export class CreateUserUseCase implements ICreateUser {
  constructor (private readonly hasher: IHasher, private readonly saveUserRepository: ISaveUserRepository, private readonly findUserByDocumentOrEmail: IFindUserByDocumentOrEmailRepository) {}

  public async execute (params: CreateUserParams): Promise<User> {
    const hashedPassword = await this.hasher.hash(params.password);
    params.password = hashedPassword;
    if (!isValidCpf(params.document)) throw new Error('Documento deve ser um cpf válido');
    const alreadyRegisteredUser = await this.findUserByDocumentOrEmail.findByDocumentOrEmail({ document: params?.document, email: params?.email });
    if (alreadyRegisteredUser) throw new UserAlreadyRegisteredError();
    return this.saveUserRepository.save(params);
  }
}
