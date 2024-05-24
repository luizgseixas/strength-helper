import { mergeTypeDefs } from '@graphql-tools/merge';
import userTypeDef from './user-typeDef';
import exerciseTypeDefs from './exercise-type';

const mergedTypeDefs = mergeTypeDefs([userTypeDef, exerciseTypeDefs]);

export default mergedTypeDefs;
