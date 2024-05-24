import { IListExercisesRepository } from '../protocols/db/list-exercises-repository';
import { ListExercisesUseCase } from './list-exercise-usecase';
import { mockExercise } from './mocks/exercise-mock';

describe('ListExercisesUseCase', () => {
  let sut: ListExercisesUseCase;
  let listExercisesRepository: IListExercisesRepository;

  beforeEach(async () => {
    listExercisesRepository = { list: jest.fn().mockResolvedValue([mockExercise]) };
    sut = new ListExercisesUseCase(listExercisesRepository);
  });

  it('should be defined', async () => {
    expect(sut).toBeDefined();
  });

  it('should call ListExercisesRepository', async () => {
    await sut.execute();

    expect(listExercisesRepository.list).toHaveBeenCalled();
  });

  it('should return exercises list on success', async () => {
    const response = await sut.execute();

    expect(response).toEqual([mockExercise]);
  });
});
