import React from 'react';
import TeamItem from './TeamItem';
import { Grid } from '@mui/material';

const TeamList = ({ teams }) => {
  return (
    <div style={{ marginLeft: 80, marginRight: 80, marginBottom: 30 }}>
      {teams.map(
        (team, index) =>
          index % 2 === 0 && (
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <TeamItem key={team.id} team={team} />
              </Grid>
              {teams[index + 1] && (
                <Grid item xs={6}>
                  <TeamItem key={teams[index + 1].id} team={teams[index + 1]} />
                </Grid>
              )}
            </Grid>
          )
      )}
    </div>
  );
};

export default TeamList;
