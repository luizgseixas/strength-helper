import { Exercise } from '../../../domain/models';
import { RegisterExerciseParams } from '../../../domain/usecases';
import { IRegisterExerciseRepository } from '../../../protocols/db/register-exercise-repository';
import { DrizzleDbConnection } from '../connection';
import { exercises } from '../schema';
import { IListExercisesRepository } from '../../../protocols/db/list-exercises-repository';

export class DrizzleExerciseRepository implements IRegisterExerciseRepository, IListExercisesRepository {
  constructor (private readonly dbConnection: DrizzleDbConnection) {}

  public async register (params: RegisterExerciseParams): Promise<Exercise> {
    const returning = await this.dbConnection.insert(exercises).values(params).returning();
    return returning[0];
  };

  public async list (): Promise<Exercise[]> {
    return this.dbConnection.select().from(exercises);
  }
}
