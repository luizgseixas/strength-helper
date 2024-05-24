import { RegisterExerciseParams } from '../domain/usecases/register-exercise';
import { IRegisterExerciseRepository } from '../protocols/db/register-exercise-repository';
import { RegisterExerciseUseCase } from './register-exercise-usecase';
import { Exercise } from '../domain/models';

describe('RegisterExerciseUseCase', () => {
  let sut: RegisterExerciseUseCase;
  let registerExerciseRepository: IRegisterExerciseRepository;
  const registerExerciseParams: RegisterExerciseParams = {
    name: 'any_name',
    muscle: 'any_muscle'
  };
  const mockExercise: Exercise = {
    id: 'any_id',
    name: 'any_name',
    muscle: 'any_muscle'
  };

  beforeEach(async () => {
    registerExerciseRepository = { register: jest.fn().mockResolvedValue(mockExercise) };
    sut = new RegisterExerciseUseCase(registerExerciseRepository);
  });

  it('should be defined', async () => {
    expect(sut).toBeDefined();
  });

  it('should call RegisterExerciseRepository with correct params', async () => {
    await sut.execute(registerExerciseParams);

    expect(registerExerciseRepository.register).toHaveBeenCalledWith(registerExerciseParams);
  });

  it('should return a exercise on success', async () => {
    const response = await sut.execute(registerExerciseParams);

    expect(response).toEqual(mockExercise);
  });
});
