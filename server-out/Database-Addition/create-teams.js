const faker = require('faker');

const Team = require('../models/team');

async function createTeams() {
  const teamSize = Math.floor(Math.random() * 5) + 1;
  const members = [];

  for (let i = 0; i < teamSize; i++) {
    members.push({
      name: faker.name.findName(),
    });
  }

  const newTeam = new Team({
    title: faker.company.catchPhrase(),
    challengeHashtags: [
      '#' + faker.random.word(),
      '#' + faker.random.word(),
    ],
    description: faker.lorem.paragraph(),
    idea: faker.lorem.sentence(),
    roles: [
      'Frontend Developer',
      'Backend Developer',
      'Designer',
      'Product Manager',
      'Data Analyst',
    ].sort(() => 0.5 - Math.random()).slice(0, teamSize),
    members,
    contact: faker.internet.email(),
  });

  try {
    const savedTeam = await newTeam.save();
    console.log('New random team created:', savedTeam);
  } catch (error) {
    console.error(error);
  }
}

module.exports.createTeams = createTeams;
// const Team = require('../models/team');

// async function createTeams() {
//   const newTeam = new Team({
//     title: 'My Awesome Team',
//     challengeHashtags: ['#challenge1', '#challenge2'],
//     description: 'We are a team of developers working on a cool project!',
//     idea: 'Our idea is to build a mobile app that helps people find local events.',
//     roles: ['Frontend Developer', 'Backend Developer', 'Designer'],
//     members: [
//       {
//         name: 'Alice',
//       },
//       {
//         name: 'Bob',
//       },
//     ],
//     contact: 'team@example.com',
//   });

//   try {
//     const team = await newTeam.save();
//     console.log('New team created:', team);
//   } catch (error) {
//     console.error(error);
//   }
// }

// module.exports.createTeams = createTeams;
