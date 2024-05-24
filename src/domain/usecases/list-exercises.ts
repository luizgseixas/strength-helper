import { Exercise } from '../models';

export interface IListExercises {
  execute: () => Promise<Exercise[]>;
}
