import { ISaveUserRepository } from 'src/protocols/db/save-user-repository';
import { DrizzleDbConnection } from '../connection';
import { users } from '../schema';
import { CreateUserParams } from 'src/domain/usecases/create-user';

export class DrizzleUserRepository implements ISaveUserRepository {
  constructor (private readonly dbConnection: DrizzleDbConnection) {}

  public async save (user: CreateUserParams) {
    const returning = await this.dbConnection.insert(users).values(user).returning();
    return returning[0];
  };
}
