const { gql } = require("apollo-server");

const heroQuery = gql`
  type QueryHero {
    heros: [Hero]
  }
`;