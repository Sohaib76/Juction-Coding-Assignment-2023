const User = require('../models/user');

async function createUsers() {

    const newUser = new User({
        name: 'Andrea Smith',
        title: 'UX Designer',
        image: 'https://via.placeholder.com/210x280',
        about: 'As a student at Aalto University, I have also had the opportunity to engage in cross-disciplinary collaborations with students and faculty from other schools, broadening my understanding of different fields and approaches. As a student at Aalto University, I have also had the opportunity to engage in cross-disciplinary collaborations with students and faculty from other schools, broadening my understanding of different fields and approaches.',
        linkedin: 'https://www.linkedin.com/in/johndoe/',
        insta: 'https://www.instagram.com/johndoe/',
        applicationLetter: '',
        isAccepted: false,
        skills: [
            { name: 'Illustrator', level: 3 },
    { name: 'Figma', level: 4 },
    { name: 'InVision', level: 1 },
    { name: 'XD', level: 4 },
    { name: 'Bootstrap', level: 3 },
    { name: 'React', level: 5 },
        ],
        contact: 'andrea.smith@junction.fi',
        user_id: 1,
      });


try {
    const savedUser = await newUser.save();
    console.log('New random team created:', savedUser);
  } catch (error) {
    console.error(error);
  }
}
module.exports.createUsers = createUsers;
