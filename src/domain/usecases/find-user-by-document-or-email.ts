import { User } from '../models';

export type FindUserByDocumentOrEmailParams = {
  document?: string;
  email?: string;
}

export interface IFindUserByDocumentOrEmail {
  execute(params: FindUserByDocumentOrEmailParams): Promise<User | null>
}
