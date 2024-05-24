import { ParameterNotProvidedError } from '../http/errors/parameter-not-provided';
import { User } from '../domain/models';
import { FindUserByDocumentOrEmailParams, IFindUserByDocumentOrEmail } from '../domain/usecases/find-user-by-document-or-email';
import { IFindUserByDocumentOrEmailRepository } from '../protocols/db/find-user-by-document-or-email-repository';

export class FindUserByDocumentOrEmailUseCase implements IFindUserByDocumentOrEmail {
  constructor (private readonly findUserByDocumentOrEmailRepository: IFindUserByDocumentOrEmailRepository) {}

  public async execute (params: FindUserByDocumentOrEmailParams): Promise<User | null> {
    if (!params?.document && !params?.email) throw new ParameterNotProvidedError('document or email');
    return this.findUserByDocumentOrEmailRepository.findByDocumentOrEmail(params);
  }
}
