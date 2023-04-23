export const userTypes = /* GraphQL */ `
  type User {
    id: ID!
    name: String!
    lastname1: String!
    lastname2: String
    email: String!
    password: String!
    birthdate: Date!
    phone: String
    gender: String
    role: Role!
    team: Team
    org: Organization!
    posts: [Post]
  }
`;
