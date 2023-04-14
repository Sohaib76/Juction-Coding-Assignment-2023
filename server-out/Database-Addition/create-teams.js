const faker = require('faker');

const Team = require('../models/team');

async function createTeams() {
  // const teamSize = Math.floor(Math.random() * 5) + 1;
  const teamSize = 3;
  const members = [];

  const roles =  [
    'Frontend Developer',
    'Backend Developer',
    'Designer',
    'Product Manager',
    'Data Analyst',
    'Engineer'
  ]
  for (let i = 0; i < teamSize; i++) {
    const randomRole = roles[Math.floor(Math.random() * roles.length)];

    members.push({
      name: faker.name.findName(),
      role:randomRole
    });
  }

  const newTeam = new Team({
    // title: faker.company.catchPhrase(),
    // description: faker.lorem.paragraph(),
    // idea: faker.lorem.sentence(),
    title: faker.company
    .catchPhrase()
    .split(' ')
    .slice(0, 1)
    .join(' ')
    .toUpperCase()
    ,
    challengeHashtag: '#' + faker.random.word(),

  idea: faker.lorem.sentence() + ' ' + faker.lorem.sentence(),
  description: Array.from({ length: 7 }, () => faker.lorem.sentence()).join(' '),
    roles: [
      'Frontend',
      'Backend',
      'Designer',
      'Manager',
      'Analyst',
      'Engineer'
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

// Above Faker Method /////////////////////////////////////////////




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
