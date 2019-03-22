const { gql } = require("apollo-server");

const bookQuery = gql`
  type QueryBook {
    books: [Book]
  }
`;
