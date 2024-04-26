const gql = require("graphql-tag");

const LogoTypeDef = gql`
  extend type Query {
    logo(logoId: String!): Logo
  }

  type Logo {
    logoId: String
    name: String
  }
`;

module.exports = LogoTypeDef;
