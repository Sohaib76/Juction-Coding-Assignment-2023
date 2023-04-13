import React from 'react'
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Filter from '../Filter/Filter';
import Paper from '@mui/material/Paper';
import { grey } from '@mui/material/colors';
import {useMediaQuery, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

// Your other code...



// const circles = [
//     { technology: 'Illustrator', competency: 3 },
//     { technology: 'Figma', competency: 5 },
//     { technology: 'Photoshop', competency: 2 },
//     { technology: 'Sketch', competency: 4 },
//     { technology: 'InVision', competency: 1 },
//     { technology: 'XD', competency: 4 },
//     { technology: 'Bootstrap', competency: 3 },
//     { technology: 'React', competency: 5 },
//     { technology: 'Angular', competency: 2 },
//     { technology: 'Vue', competency: 4 },
//     { technology: 'Node.js', competency: 1 },
//     { technology: 'Express', competency: 4 },
//   ];
  
const skills = [
    { name: 'Illustrator', level: 3 },
    { name: 'Figma', level: 4 },
    { name: 'InVision', level: 1 },
    { name: 'XD', level: 4 },
    { name: 'Bootstrap', level: 3 },
    { name: 'React', level: 5 },
 
    // Add more technologies here
  ];

const SkillLevel = ({ level }) => {
    return (
      <Grid container spacing={1}>
        {Array.from({ length: 5 }, (_, i) => (
          <Grid item key={i}>
            <Box
              width={18}
              height={18}
              borderRadius="50%"
              bgcolor={i < level ? 'primary.main' : 'grey.300'}
            />
          </Grid>
        ))}
      </Grid>
    );
  };

const Profile = () => {
    const theme = useTheme();
const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));



  const aboutText = "  As a student at Aalto University, I have also had the opportunity to engage in cross-disciplinary collaborations with students and faculty from other schools, broadening my understanding of different fields and approaches.    As a student at Aalto University, I have also had the opportunity to engage in cross-disciplinary collaborations with students and faculty from other schools, broadening my understanding of different fields and approaches."

  return (
    <div>
    <Filter showSearch={false}/>
    <Card
  sx={{
    width: 'calc(100%-32px)',
    marginLeft: 5,
    marginRight: 5,
    height: 'calc(100vh - 150px)',
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#eeeee4',
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }}
>
  <CardContent>
    <div>
      <Typography variant="h4" component="h1" mt={2} ml={2}>
        Andrea Smith
        <Box component="span" sx={{ color: grey[600] }}>/ UX Designer</Box>
      </Typography>
      <Typography ml={2} sx={{ fontSize: 14, color: grey[600] }} gutterBottom>
        andrea.smith@junction.fi
      </Typography>
    </div>
    <Grid container spacing={-18}>
      <Grid item xs={12} md={4}>
        <Box mt={4} ml={2}   sx={{
    borderTopRightRadius: isSmallScreen ? 0 : 10, // Adjust borderRadius based on screen size
    borderBottomRightRadius: isSmallScreen ? 0 : 10, // Adjust borderRadius based on screen size
    overflow: 'hidden', // Hide image parts outside borderRadius
  }}>
          <img src="https://via.placeholder.com/210x280" 
                        sx={{
                            width: isSmallScreen ? '100%' : '220px',
                            height: isSmallScreen ? 'auto' : '290px',
                            borderRadius: 10,
                          }}
                          style={{borderRadius:10}}

          alt="alt"  />
        </Box>
      </Grid>
      <Grid item xs={12} md={4} >
        <Typography sx={{ fontSize: 18 }} component="h3" mt={4}>
          Skills
        </Typography>
        <Box style={{ maxWidth: 400 }}>
          <Grid container spacing={1} mt={2} >
            {skills.map((skill, index) => (
              <Grid item xs={12} key={index}>
                <Grid container alignItems="center" spacing={1}>
                  <Grid item>
                    <SkillLevel level={skill.level} />
                  </Grid>
                  <Grid item>
                    <Box>
                      <Typography sx={{ fontSize: 12 }}>{skill.name}</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box style={{ maxWidth: 300 }} mr={2} ml={6}>
          <Typography sx={{ fontSize: 18 }} component="h3" mt={4}>
            About Me
          </Typography>
          <Typography sx={{ fontSize: 12 }} component="p" mt={2} >
            {aboutText}
          </Typography>
          <Box mt={1} >
        <IconButton  color="primary" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon  fontSize="large" />
        </IconButton>

        <IconButton color="secondary" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon  fontSize="large"/>
        </IconButton>

          </Box>
        </Box>
      </Grid>
    </Grid>
  </CardContent>
</Card>
</div>
  )
}

export default Profile