import { CreateUserParams } from '../../domain/usecases/create-user';
import { CreateUserUseCase } from './create-user.usecase';
import { ISaveUserRepository } from '../protocols/db/save-user-repository';
import { IHasher } from '../../infra/criptography/bcrypt/bcrypt-adapter';
import { User } from '../../domain/models';

describe('CreateUserUseCase', () => {
  let sut: CreateUserUseCase;
  let hasher: IHasher;
  let saveUserRepository: ISaveUserRepository;

  const createUserParams: CreateUserParams = {
    name: 'any_name',
    document: 'any_document',
    email: 'any_email',
    phone: 'any_phone',
    password: 'any_password'
  };

  const mockUser: User = {
    id: 'any_user_id',
    name: 'any_name',
    document: 'any_document',
    email: 'any_email',
    phone: 'any_phone',
    password: 'any_hashed_password',
    createdAt: new Date('2024-05-16').toISOString(),
    updatedAt: new Date('2024-05-16').toISOString()
  };

  beforeEach(async () => {
    hasher = { hash: jest.fn().mockResolvedValue('any_hashed_password') };
    saveUserRepository = { save: jest.fn().mockResolvedValue(mockUser) };
    sut = new CreateUserUseCase(hasher, saveUserRepository);
  });

  it('should be defined', async () => {
    expect(sut).toBeDefined();
  });

  it('should call Hasher with correct params', async () => {
    await sut.execute(createUserParams);

    expect(hasher.hash).toHaveBeenCalledWith('any_password');
  });

  it('should call SaveUserRepository with correct params', async () => {
    await sut.execute(createUserParams);

    expect(saveUserRepository.save).toHaveBeenCalledWith({
      name: 'any_name',
      document: 'any_document',
      email: 'any_email',
      phone: 'any_phone',
      password: 'any_hashed_password'
    });
  });

  it('should return an User on success', async () => {
    const response = await sut.execute(createUserParams);

    expect(response).toEqual(mockUser);
  });
});
