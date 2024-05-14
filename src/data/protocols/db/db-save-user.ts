import { User } from "src/domain/models";

export interface ISaveUserRepository {
  save: (user: User) => Promise<User>;
}
