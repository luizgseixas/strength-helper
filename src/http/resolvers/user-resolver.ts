import { createUserFactory } from '../../factories/create-user';
import { createUserSchema } from '../dtos/create-user-dto';
import { listUsersFactory } from '../../factories/list-users';

const userResolvers = {
  Query: {
    listUsers: async (parent: any, args: any, ctx: any) => {
      try {
        const listUsersUseCase = listUsersFactory();
        return listUsersUseCase.execute();
      } catch (error) {
        console.error({ error });
      }
    }
  },
  Mutation: {
    createUser: async (parent: any, args: any, ctx: any) => {
      try {
        const params = await createUserSchema.parseAsync(args.params);
        const createUserUseCase = createUserFactory();
        const user = await createUserUseCase.execute(params);
        return user;
      } catch (error) {
        console.error({ error });
      }
    }
  }
};

export default userResolvers;
