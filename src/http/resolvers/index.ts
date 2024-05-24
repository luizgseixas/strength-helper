import { mergeResolvers } from '@graphql-tools/merge';
import userResolver from './user-resolver';
import exerciseResolvers from './exercise-resolver';

const mergedResolvers = mergeResolvers([userResolver, exerciseResolvers]);

export default mergedResolvers;
