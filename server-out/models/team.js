const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  title: String,
  challengeHashtag: String,
  description: String,
  idea: String,
  roles: [String],
  members: [
    {
      name: String,
      role: String
    },
  ],
  contact: String,
});

module.exports = mongoose.model('Team', teamSchema);
