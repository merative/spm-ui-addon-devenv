const gql = require('graphql-tag');

const PersonTypeDef = gql`
type Query {
  persons: [Person],
}

type Person {
  id: String
  firstname: String
  surname: String
  age: Int
}
`;

module.exports = PersonTypeDef