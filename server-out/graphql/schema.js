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

  type User {
    id: ID!
    user_id: Int
    name: String
    title: String
    image: String
    about: String
    linkedin: String
    insta: String
    applicationLetter: String
    isAccepted: Boolean
    skills: [Skill]
    contact: String
  }

  type Skill {
    name: String!
    level: Int!
  }

  input UserUpdateInput {
    applicationLetter: String
  }
  
  type Mutation {
    updateUser(user_id: Int!, data: UserUpdateInput!): User
  }
  
  

  type Query {
    teams: [Team]!
    users: [User]!
  }

 
`);

module.exports = schema;
