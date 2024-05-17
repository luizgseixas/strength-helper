import { BcryptAdapter } from './bcrypt-adapter';
import bcrypt from 'bcrypt';

jest.mock('bcrypt', () => ({
  hash: jest.fn().mockResolvedValue('any_hashed_value'),
  compare: jest.fn().mockResolvedValue(true)
}));

const salt = 12;

describe('BcryptAdapter', () => {
  let sut: BcryptAdapter;

  beforeEach(async () => {
    sut = new BcryptAdapter(salt);
  });

  it('should be defined', async () => {
    expect(sut).toBeDefined();
  });
  describe('#hash', () => {
    test('Should call hash with correct values', async () => {
      const hashSpy = jest.spyOn(bcrypt, 'hash');
      await sut.hash('any_value');
      expect(hashSpy).toHaveBeenCalledWith('any_value', salt);
    });

    test('Should return a valid hash on hash success', async () => {
      const hash = await sut.hash('any_value');
      expect(hash).toBe('any_hashed_value');
    });

    test('Should throw if hash throws', async () => {
      jest.spyOn(bcrypt, 'hash').mockImplementationOnce(() => { throw new Error(); });
      const promise = sut.hash('any_value');
      await expect(promise).rejects.toThrow();
    });
  });

  describe('#compare', () => {
    test('Should call compare with correct values', async () => {
      const compareSpy = jest.spyOn(bcrypt, 'compare');
      await sut.compare('any_value', 'any_hash');
      expect(compareSpy).toHaveBeenCalledWith('any_value', 'any_hash');
    });

    test('Should return true when compare success', async () => {
      const isValid = await sut.compare('any_value', 'any_hash');
      expect(isValid).toBe(true);
    });

    test('Should return false when compare fails', async () => {
      jest.spyOn(bcrypt, 'compare').mockImplementation(async () => Promise.resolve(false));
      const isValid = await sut.compare('any_value', 'any_hash');
      expect(isValid).toBe(false);
    });

    test('Should throw if compare throws', async () => {
      jest.spyOn(bcrypt, 'compare').mockImplementationOnce(() => { throw new Error(); });
      const promise = sut.compare('any_value', 'any_hash');
      await expect(promise).rejects.toThrow();
    });
  });
});
