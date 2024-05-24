import { Exercise } from '../../domain/models';

export interface IListExercisesRepository {
  list: () => Promise<Exercise[]>;
}
