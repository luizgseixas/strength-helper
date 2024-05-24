import { mergeTypeDefs } from '@graphql-tools/merge';
import userTypeDef from './user-typeDef';

const mergedTypeDefs = mergeTypeDefs([userTypeDef]);

export default mergedTypeDefs;
