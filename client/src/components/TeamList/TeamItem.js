import React, { useState } from 'react';
import TeamDetails from './TeamDetails';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowDropUp } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

const TeamItem = ({ team }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card
      sx={{
        maxWidth: 500,
        marginTop: 3,
        backgroundColor: '#eeeee4',
        borderRadius: 4,
      }}
    >
      <CardContent>
        <Typography variant="h4" component="h1" mt={2} ml={2}>
          {team.title.toUpperCase()}
        </Typography>
        <Link href="#" underline="hover">
          <Typography ml={2} sx={{ fontSize: 14 }} color="#1E90FF" gutterBottom>
            {team.challengeHashtag}
          </Typography>
        </Link>
        <Typography sx={{ fontSize: 11, textAlign: 'left' }} mt={1} ml={2}>
          {team.idea}
        </Typography>
        <Typography sx={{ fontSize: 11, textAlign: 'left' }} mt={1} ml={2}>
          {team.description}
        </Typography>
        <Typography variant="h7" component="h3" mt={4} mb={2} ml={2}>
          WE ARE LOOKING FOR
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {team.roles.map((role, index) => (
            <Grid item xs={4} key={index}>
              <Link
                component={RouterLink}
                to="/apply"
                state={{
                  role: role,
                  title: team.title,
                  hashtag: team.challengeHashtag,
                }}
              >
                <Button
                  variant="text"
                  sx={{
                    width: 120,
                    height: 60,
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
                  }}
                >
                  <Typography
                    component="span"
                    variant="h8"
                    color="#fff"
                    sx={{ textAlign: 'center' }}
                  >
                    {role}
                  </Typography>
                </Button>
              </Link>
            </Grid>
          ))}
        </Grid>

        {showDetails && (
          <div>
            <TeamDetails team={team} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <IconButton
                onClick={() => setShowDetails(!showDetails)}
                sx={{ fontSize: 50, marginTop: 1 }}
              >
                <ArrowDropUp sx={{ fontSize: 50 }} />
              </IconButton>
            </div>
          </div>
        )}
      </CardContent>

      {!showDetails && (
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button
            onClick={() => setShowDetails(!showDetails)}
            color="primary"
            style={{ color: '#000' }}
            sx={{
              textTransform: 'lowercase',
              borderBottom: '1px solid black',
              borderRadius: 0,
            }}
            size="small"
          >
            Show More
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default TeamItem;
