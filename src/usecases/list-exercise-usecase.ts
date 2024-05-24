import { IListExercisesRepository } from '../protocols/db/list-exercises-repository';
import { Exercise } from '../domain/models';
import { IListExercises } from '../domain/usecases/list-exercises';

export class ListExercisesUseCase implements IListExercises {
  constructor (private readonly listExercisesRepository: IListExercisesRepository) {}

  public async execute (): Promise<Exercise[]> {
    return this.listExercisesRepository.list();
  }
}
