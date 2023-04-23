export const roleTypes = /* GraphQL */ `
  type Role {
    id: ID!
    name: String!
  }
  type Query {
    getRoles: [Role]
  }
`;
