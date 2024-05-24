import { Exercise } from '../../../domain/models';
import { RegisterExerciseParams } from '../../../domain/usecases';
import { IRegisterExerciseRepository } from '../../../protocols/db/register-exercise-repository';
import { DrizzleDbConnection } from '../connection';
import { exercises } from '../schema';

export class DrizzleExerciseRepository implements IRegisterExerciseRepository {
  constructor (private readonly dbConnection: DrizzleDbConnection) {}

  public async register (params: RegisterExerciseParams): Promise<Exercise> {
    const returning = await this.dbConnection.insert(exercises).values(params).returning();
    return returning[0];
  };
}
