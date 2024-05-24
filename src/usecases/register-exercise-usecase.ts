import { Exercise } from '../domain/models';
import { IRegisterExercise, RegisterExerciseParams } from '../domain/usecases/register-exercise';
import { IRegisterExerciseRepository } from '../protocols/db/register-exercise-repository';

export class RegisterExerciseUseCase implements IRegisterExercise {
  constructor (private readonly registerExerciseRepository: IRegisterExerciseRepository) {}

  public async execute (params: RegisterExerciseParams): Promise<Exercise> {
    return this.registerExerciseRepository.register(params);
  };
}
