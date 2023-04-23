export const postTypes = /* GraphQL */ `
  type Post {
    id: ID!
    title: String!
    description: String!
    author: User!
    reactions: [Reactions]
  }
`;
