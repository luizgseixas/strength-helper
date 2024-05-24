import { Exercise } from '../../domain/models';
import { RegisterExerciseParams } from '../../domain/usecases/register-exercise';

export interface IRegisterExerciseRepository {
  register: (params: RegisterExerciseParams) => Promise<Exercise>;
}
