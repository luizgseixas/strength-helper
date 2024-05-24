import { FindUserByDocumentOrEmailParams } from '../../domain/usecases/find-user-by-document-or-email';
import { User } from '../../domain/models';

export interface IFindUserByDocumentOrEmailRepository {
  findByDocumentOrEmail: (params: FindUserByDocumentOrEmailParams) => Promise<User | null>;
}
