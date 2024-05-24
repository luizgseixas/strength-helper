import { DrizzleExerciseRepository } from '../infra/db/repositories/exercise-repository';
import { ListExercisesUseCase } from '../usecases/list-exercise-usecase';
import { db } from '../infra/db/connection';

export const listExercisesFactory = (): ListExercisesUseCase => {
  const exerciseRepository = new DrizzleExerciseRepository(db);
  return new ListExercisesUseCase(exerciseRepository);
};
