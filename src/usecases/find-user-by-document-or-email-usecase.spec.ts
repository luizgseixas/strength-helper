import { FindUserByDocumentOrEmailParams } from '../domain/usecases/find-user-by-document-or-email';
import { FindUserByDocumentOrEmailUseCase } from './find-user-by-document-or-email-usecase';
import { IFindUserByDocumentOrEmailRepository } from '../protocols/db/find-user-by-document-or-email-repository';
import { ParameterNotProvidedError } from '../http/errors/parameter-not-provided';
import { mockUser } from './mocks/user-mock';

describe('FindUserByDocumentOrEmailUseCase', () => {
  let sut: FindUserByDocumentOrEmailUseCase;
  let findUserByDocumentOrEmailRepository: IFindUserByDocumentOrEmailRepository;
  const findUserByDocumentOrEmailParams: FindUserByDocumentOrEmailParams = {
    document: '84341833820',
    email: 'any_email@mail.com'
  };

  beforeEach(async () => {
    findUserByDocumentOrEmailRepository = { findByDocumentOrEmail: jest.fn().mockResolvedValue(mockUser) };
    sut = new FindUserByDocumentOrEmailUseCase(findUserByDocumentOrEmailRepository);
  });

  it('should be defined', async () => {
    expect(sut).toBeDefined();
  });

  it('should throw a ParameterNotProvidedError if document or email is not provided', async () => {
    const promise = sut.execute({});

    expect(promise).rejects.toThrow(new ParameterNotProvidedError('document or email'));
  });

  it('should call FindUserByDocumentOrEmailRepository with correct params', async () => {
    await sut.execute(findUserByDocumentOrEmailParams);

    expect(findUserByDocumentOrEmailRepository.findByDocumentOrEmail).toHaveBeenCalledWith({
      document: '84341833820',
      email: 'any_email@mail.com'
    });
  });

  it('should return null if FindUserByDocumentOrEmailRepository not returns', async () => {
    jest.spyOn(findUserByDocumentOrEmailRepository, 'findByDocumentOrEmail').mockResolvedValueOnce(null);

    const response = await sut.execute(findUserByDocumentOrEmailParams);

    expect(response).toEqual(null);
  });

  it('should return a user on success', async () => {
    const response = await sut.execute(findUserByDocumentOrEmailParams);

    expect(response).toEqual(mockUser);
  });
});
