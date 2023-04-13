const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const { graphqlHTTP } = require('express-graphql');
const {createTeams} = require('./Database-Addition/create-teams');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const cors = require('cors');

// const { graphqlHTTP } = require('express-graphql');

// require('dotenv').config();
const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

mongoose.connect('mongodb://127.0.0.1:27017/junction', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to the MongoDB database');
  // createTeams();
});

app.use(cors());

app.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      rootValue: resolvers,
      graphiql: true,
    })
  );


// app.get('/api/teams', (req, res) => {
//   // Fetch team data from your MongoDB database or a static JSON file
// //   res.json([...]);
// });

app.listen(port, () => console.log(`Server running on port ${port}`));





