const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Team {
    id: ID!
    title: String!
    challengeHashtags: [String]!
    description: String!
    idea: String!
    roles: [String]!
    members: [Member]!
    contact: String!
  }

  type Member {
    name: String!
  }

  type Query {
    teams: [Team]!
  }
`);

module.exports = schema;
