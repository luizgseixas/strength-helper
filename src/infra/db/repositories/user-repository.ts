import { ISaveUserRepository } from "src/data/protocols/db/db-save-user";
import { User } from "src/domain/models";
import { DrizzleDbConnection } from "../connection";
import { users } from "../schema";

export class DrizzleUserRepository implements ISaveUserRepository {
  constructor(private readonly dbConnection: DrizzleDbConnection) {}

  public async save(user: User): Promise<User> {
    await this.dbConnection.insert(users).values(user);
    return user;
  };
}