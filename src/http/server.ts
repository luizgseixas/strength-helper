import { ApolloServer } from 'apollo-server';
import mergedResolvers from './resolvers';
import mergedTypeDefs from './typeDefs';

const server = new ApolloServer({ typeDefs: mergedTypeDefs, resolvers: mergedResolvers });
server.listen().then(({ url }) => console.log(`📦 HTTP server running on ${url}`));
