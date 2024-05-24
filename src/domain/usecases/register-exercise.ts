import { Exercise } from '../models';

export type RegisterExerciseParams = {
  name: string;
  muscle: string;
}

export interface IRegisterExercise {
  execute: (params: RegisterExerciseParams) => Promise<Exercise>;
}
