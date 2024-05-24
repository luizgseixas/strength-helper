import { IListUsersRepository } from '../protocols/db/list-users-repository';
import { ListUsersUseCase } from './list-users-usecase';
import { mockUser } from './mocks/user-mock';

describe('ListUsersUseCase', () => {
  let sut: ListUsersUseCase;
  let listUsersRepository: IListUsersRepository;

  beforeEach(async () => {
    listUsersRepository = { list: jest.fn().mockResolvedValue([mockUser]) };
    sut = new ListUsersUseCase(listUsersRepository);
  });

  it('should be defined', async () => {
    expect(sut).toBeDefined();
  });

  it('should call ListUsersRepository', async () => {
    await sut.execute();

    expect(listUsersRepository.list).toHaveBeenCalled();
  });

  it('should throw if ListUsersRepository throws', async () => {
    jest.spyOn(listUsersRepository, 'list').mockImplementationOnce(() => { throw new Error('repository_error'); });

    const promise = sut.execute();

    expect(promise).rejects.toThrow(new Error('repository_error'));
  });

  it('should return users list on success', async () => {
    const response = await sut.execute();

    expect(response).toEqual([mockUser]);
  });
});
