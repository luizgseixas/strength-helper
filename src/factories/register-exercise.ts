import { db } from '../infra/db/connection';
import { DrizzleExerciseRepository } from '../infra/db/repositories/exercise-repository';
import { RegisterExerciseUseCase } from '../usecases/register-exercise.usecase';

export const registerExerciseFactory = (): RegisterExerciseUseCase => {
  const exerciseRepository = new DrizzleExerciseRepository(db);
  return new RegisterExerciseUseCase(exerciseRepository);
};
