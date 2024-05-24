import { IListUsersRepository } from '../protocols/db/list-users-repository';
import { User } from '../domain/models';
import { IListUsers } from '../domain/usecases';

export class ListUsersUseCase implements IListUsers {
  constructor (private readonly listUsersRepository: IListUsersRepository) {}

  public async execute (): Promise<User[]> {
    return this.listUsersRepository.list();
  }
}
