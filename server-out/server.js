const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const { graphqlHTTP } = require('express-graphql');
const {createTeams} = require('./Database-Addition/create-teams');
const {createUsers} = require('./Database-Addition/create-users');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const cors = require('cors');
const { teams, users } = require("./seeds/seedData");



// require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/junction', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Comment this code if seeding data
mongoose.connection.once('open', () => {
  console.log('Connected to the MongoDB database');
  // To create new Teams and Users from template
  // createTeams();
  // createUsers();

  
});


// To Seed Data to your MongoDB Database uncomment following Code
// mongoose.connection.once("open", async () => {
//   console.log("Connected to the MongoDB database");

//   // Clear existing data
//   await Team.deleteMany({});
//   await User.deleteMany({});

//   // Insert seed data
//   await Team.insertMany(teams);
//   await User.insertMany(users);

//   console.log("Database seeding completed");

//   // Close the connection
//   mongoose.connection.close();
// });

app.use(cors());

app.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      rootValue: resolvers,
      graphiql: true,
    })
  );

app.listen(port, () => console.log(`Server running on port ${port}`));





