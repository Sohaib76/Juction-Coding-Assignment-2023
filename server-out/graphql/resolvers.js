const Team = require('../models/team');

const resolvers = {
  teams: async () => {
    try {
      const teams = await Team.find();
      return teams;
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = resolvers;
