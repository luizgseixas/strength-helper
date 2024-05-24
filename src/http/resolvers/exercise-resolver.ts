import { registerExerciseFactory } from '../../factories/register-exercise';
import { registerExerciseSchema } from '../dtos/register-exercise-dto';

const exerciseResolvers = {
  Query: {
    helloWorld: () => 'Hello World!'
  },
  Mutation: {
    registerExercise: async (parent: any, args: any, ctx: any) => {
      try {
        console.log({ args });
        const params = await registerExerciseSchema.parseAsync(args.params);
        const registerExerciseUseCase = registerExerciseFactory();
        const exercise = await registerExerciseUseCase.execute(params);
        return exercise;
      } catch (error) {
        console.error({ error });
      }
    }
  }
};

export default exerciseResolvers;
