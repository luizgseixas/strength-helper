import { CreateUserParams } from '../domain/usecases';
import { CreateUserUseCase } from './create-user-usecase';
import { ISaveUserRepository } from '../protocols/db/save-user-repository';
import { IHasher } from '../protocols/cryptography/hash';
import { mockUser } from './mocks/user-mock';
import { IFindUserByDocumentOrEmailRepository } from '../protocols/db/find-user-by-document-or-email-repository';
import { UserAlreadyRegisteredError } from '../http/errors/user-already-registered';

describe('CreateUserUseCase', () => {
  let sut: CreateUserUseCase;
  let hasher: IHasher;
  let saveUserRepository: ISaveUserRepository;
  let findUserByDocumentOrEmailRepository: IFindUserByDocumentOrEmailRepository;

  const createUserParams: CreateUserParams = {
    name: 'any_name',
    document: '606.498.848-76',
    email: 'any_email',
    phone: 'any_phone',
    password: 'any_password'
  };

  beforeEach(async () => {
    hasher = { hash: jest.fn().mockResolvedValue('any_hashed_password') };
    saveUserRepository = { save: jest.fn().mockResolvedValue(mockUser) };
    findUserByDocumentOrEmailRepository = { findByDocumentOrEmail: jest.fn().mockResolvedValue(null) };
    sut = new CreateUserUseCase(hasher, saveUserRepository, findUserByDocumentOrEmailRepository);
  });

  it('should be defined', async () => {
    expect(sut).toBeDefined();
  });

  it('should call Hasher with correct params', async () => {
    await sut.execute(createUserParams);

    expect(hasher.hash).toHaveBeenCalledWith('any_password');
  });

  it('should throw Error if document is invalid', async () => {
    const promise = sut.execute({ ...createUserParams, document: 'any_document' });

    expect(promise).rejects.toThrow(new Error('Documento deve ser um cpf válido'));
  });

  it('should call FindUserByDocumentOrEmail with correct params', async () => {
    await sut.execute(createUserParams);

    expect(findUserByDocumentOrEmailRepository.findByDocumentOrEmail).toHaveBeenCalledWith({
      document: '606.498.848-76',
      email: 'any_email'
    });
  });

  it('should throw a UserAlreadyRegisteredError if document is invalid', async () => {
    jest.spyOn(findUserByDocumentOrEmailRepository, 'findByDocumentOrEmail').mockResolvedValueOnce(mockUser);

    const promise = sut.execute(createUserParams);

    expect(promise).rejects.toThrow(new UserAlreadyRegisteredError());
  });

  it('should call SaveUserRepository with correct params', async () => {
    await sut.execute(createUserParams);

    expect(saveUserRepository.save).toHaveBeenCalledWith({
      name: 'any_name',
      document: '606.498.848-76',
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
