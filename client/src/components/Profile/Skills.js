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

const SkillLevel = ({ level }) => {
    return (
      <Grid container spacing={1}>
        {Array.from({ length: 5 }, (_, i) => (
          <Grid item key={i}>
            <Box
              width={12} 
            //   18
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
    console.log("Sagasg",skills);
  return (
    <div>
        <Box style={{ maxWidth: 400 }}>
    <Grid container spacing={0} mt={2} > 
    {/* spacing 1 */}
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
  </Box></div>
  )
}

export default Skills