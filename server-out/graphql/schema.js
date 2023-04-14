const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Team {
    id: ID!
    title: String!
    challengeHashtag: String!
    description: String!
    idea: String!
    roles: [String]!
    members: [Member]!
    contact: String!
  }

  type Member {
    name: String!
    role: String!
  }

  type Query {
    teams: [Team]!
  }
`);

module.exports = schema;
