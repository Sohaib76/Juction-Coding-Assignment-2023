const Team = require('../models/team');
const User = require('../models/user');

const resolvers = {

  teams: async () => {
    try {
      const teams = await Team.find();
      return teams;
    } catch (error) {
      console.error(error);
    }
  },
  users: async () => {
    try {
      const users = await User.find();
      // console.log('Users:', users); // Add this line to log the users array
      return users;
    } catch (error) {
      console.error(error);
    }
  },


    updateUser: async ({ user_id, data }) => {
      console.log("Funck YOUU", user_id, data)
      try {
        const updatedUser = await User.findOneAndUpdate(
          { user_id: user_id }, 
          { $set: { applicationLetter: data.applicationLetter } }, 
          { new: true }
        );
        console.log("data",data.applicationLetter)
        console.log("user_id",user_id)
        return updatedUser;
      } catch (error) {
        console.error(error);
      }
    },

  // Mutation: {
  //   updateUser: async (_, { user_id, data }) => {
  //     try {
  //       const user = await User.findByIdAndUpdate(user_id, data, { new: true });
  //       console.log("user",user);
  //       return user;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   },
  // Mutation: {
  //   updateUser: async (_, { user_id, data }) => {
  //     console.log("Funck YOUU")
  //     try {
  //       const updatedUser = await User.findOneAndUpdate(
  //         { user_id: user_id }, 
  //         { $set: { applicationLetter: data.applicationLetter } }, 
  //         { new: true }
  //       );
  //       console.log("data",data.applicationLetter)
  //       console.log("user_id",user_id)
  //       return updatedUser;
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   },
  
  
  // },
};


module.exports = resolvers;
