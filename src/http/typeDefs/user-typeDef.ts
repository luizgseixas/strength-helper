import { gql } from 'apollo-server';

const userTypeDefs = gql`
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
  input CreateUserParams {
    name: String!
    email: String!
    document: String!
    phone: String
    password: String!
  }
  type Query { 
    listUsers: [User!]!
  }
  type Mutation {
    createUser(params: CreateUserParams): User!
  }
`;

export default userTypeDefs;
