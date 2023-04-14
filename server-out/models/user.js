const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user_id: Number,
  name: String,
  title: String,
  image: String,
  about: String,
  linkedin: String,
  insta: String,
  applicationLetter: String,
  isAccepted: {
    type: Boolean,
    default: false
  },
  skills: [
    {
        name: {
            type: String,
          },
          level: {
            type: Number,
            min: 1,
            max: 5
          }
    }
  ],
  contact: String,
});

module.exports = mongoose.model('User', userSchema);
