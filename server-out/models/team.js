const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  title: String,
  challengeHashtags: [String],
  description: String,
  idea: String,
  roles: [String],
  members: [
    {
      name: String,
    },
  ],
  contact: String,
});

module.exports = mongoose.model('Team', teamSchema);
