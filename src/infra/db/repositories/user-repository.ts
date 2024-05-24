import { ISaveUserRepository } from '../../../protocols/db/save-user-repository';
import { DrizzleDbConnection } from '../connection';
import { users } from '../schema';
import { CreateUserParams } from '../../../domain/usecases/create-user';
import { IListUsersRepository } from '../../../protocols/db/list-users-repository';
import { User } from '../../../domain/models';
import { IFindUserByDocumentOrEmailRepository } from '../../../protocols/db/find-user-by-document-or-email-repository';
import { FindUserByDocumentOrEmailParams } from '../../../domain/usecases/find-user-by-document-or-email';
import { eq, or } from 'drizzle-orm';

export class DrizzleUserRepository implements ISaveUserRepository, IListUsersRepository, IFindUserByDocumentOrEmailRepository {
  constructor (private readonly dbConnection: DrizzleDbConnection) {}

  public async save (user: CreateUserParams): Promise<User> {
    const returning = await this.dbConnection.insert(users).values(user).returning();
    return returning[0];
  };

  public async list (): Promise<User[]> {
    return await this.dbConnection.select().from(users);
  }

  public async findByDocumentOrEmail (params: FindUserByDocumentOrEmailParams): Promise<User> {
    const user = await this.dbConnection.select().from(users).where(or(eq(users.document, params?.document!), eq(users.email, params?.email!)));
    return user[0];
  }
}
