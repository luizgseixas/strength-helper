import { gql } from 'apollo-server';

const exerciseTypeDefs = gql`
  type Exercise {
    id: String!
    name: String!
    muscle: String!
  }
  input RegisterExerciseParams {
    name: String!
    muscle: String!
  }
  type Query { listExercises: [Exercise!]! }
  type Mutation {
    registerExercise(params: RegisterExerciseParams): Exercise!
  }
`;

export default exerciseTypeDefs;
