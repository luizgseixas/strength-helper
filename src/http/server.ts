import { ApolloServer, gql } from 'apollo-server';
import { createUserFactory } from '../factories/create-user';
import { createUserSchema } from './dtos/create-user.dto';
import { listUsersFactory } from 'src/factories/list-users';

const typeDefs = gql`
  type User {
    id: String!
    name: String!
    email: String!
    document: String!
    phone: String
    password: String!
    createdAt: String!
    updatedAt: String!
  }

  type CreateUserParams {
    name: String!
    email: String!
    document: String!
    phone: String
    password: String!
  }

  type Query {
    helloWorld: String!
  }

  type Mutation {
    createUser(
      name: String!,
      email: String!,
      document: String!,
      phone: String,
      password: String!
    ): User!
  }
`;

const resolvers = {
  Query: {
    helloWorld: () => {
      return 'Hello World';
    }
  },

  Mutation: {
    createUser: async (parent: any, args: any, ctx: any) => {
      try {
        const params = await createUserSchema.parseAsync(args);
        const createUserUseCase = createUserFactory();
        const user = await createUserUseCase.execute(params);
        return user;
      } catch (error) {
        console.error({ error });
      }
    }
    // listUsers: async (parent: any, args: any, ctx: any) => {
    //   try {
    //     const listUsersUseCase = listUsersFactory();
    //     return listUsersUseCase.execute();
    //   } catch (error) {
    //     console.error({ error });
    //   }
    // }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`📦 HTTP server running on ${url}`));
