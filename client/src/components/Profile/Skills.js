import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const SkillLevel = ({ level }) => {
  return (
    <Grid container spacing={1}>
      {Array.from({ length: 5 }, (_, i) => (
        <Grid item key={i}>
          <Box
            width={12}
            height={12}
            borderRadius="50%"
            bgcolor={i < level ? 'primary.main' : 'grey.300'}
          />
        </Grid>
      ))}
    </Grid>
  );
};

const Skills = (skills) => {
  return (
    <div>
      <Box style={{ maxWidth: 400 }}>
        <Grid container spacing={0} mt={2}>
          {skills.skills.map((skill, index) => (
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
    </div>
  );
};

export default Skills;
