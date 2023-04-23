export const commentTypes = /* GraphQL */ `
  type Comment {
    id: ID!
    description: String!
    date: Date!
    author: User!
    post: Post
  }
`;
