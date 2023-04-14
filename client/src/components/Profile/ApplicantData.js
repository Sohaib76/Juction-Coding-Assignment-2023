import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import Skills from './Skills';

const ApplicantData = (applicant) => {
  const applicationLetter = `
  I am greatly interested in the topic your team is planning, as it aligns with my passion for innovative solutions and cutting-edge technology. The collaborative approach you've taken to tackle complex challenges is truly inspiring and motivates me to contribute my skills and knowledge to the project. I believe that being part of such a forward-thinking team would provide me with invaluable experience and the opportunity to grow both professionally and personally.  `;

  return (
    <Card
      sx={{
        maxWidth: 600,
        marginTop: 3,
        backgroundColor: '#eeeee4',
        borderRadius: 4,
      }}
    >
      <CardContent>
        <Typography color="#1E90FF" variant="h5" component="h1" mt={2} ml={2}>
          {applicant.applicant.name}
          <Box component="span" sx={{ color: grey[600] }}>
            / {applicant.applicant.title}
          </Box>
        </Typography>

        <Typography sx={{ fontSize: 11, textAlign: 'left' }} mt={5} ml={2}>
          {applicant.applicant.applicationLetter}
        </Typography>
        <div style={{ marginLeft: 18 }}>
          <Skills skills={applicant.applicant.skills} />
        </div>
      </CardContent>
      <CardActions style={{ marginTop: 0 }}>
        <Button
          sx={{
            width: 100,
            height: 50,
            backgroundColor: '#1E90FF',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
            borderRadius: 4,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            textTransform: 'none',
            marginLeft: 2,
            marginBottom: 1,
          }}
        >
          <Typography variant="h8" color="#fff" sx={{ textAlign: 'center' }}>
            Accept
          </Typography>
        </Button>
        <Button
          sx={{
            width: 100,
            height: 50,
            backgroundColor: 'red',
            '&:hover': {
              backgroundColor: 'red',
              opacity: [0.9, 0.8, 0.7],
            },
            borderRadius: 4,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            textTransform: 'none',
            marginLeft: 2,
            marginBottom: 1,
          }}
        >
          <Typography variant="h8" color="#fff" sx={{ textAlign: 'center' }}>
            Decline
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ApplicantData;
