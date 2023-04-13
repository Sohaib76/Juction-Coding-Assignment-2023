import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { grey } from '@mui/material/colors';




const TeamDetails = ({ team }) => {

  const items = [
    {
      id: 1,
      image: 'https://via.placeholder.com/250x300',
      title: 'Jennet',
      description: 'UX Designer'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/250x300',
      title: 'Andy',
      description: 'Engineer'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/250x300',
      title: 'Selena',
      description: 'UI Designer'
    },
    
  ];
  


  return (
    <div style={{marginTop:30}}>
      <Divider/>
      <Typography variant="h7" component="h3" mt={2} mb={2} ml={2}>
        WHO WE ARE
      </Typography>

      <Grid container spacing={2}>
  {items.map((item) => (
    <Grid item xs={12} sm={6} md={4} key={item.id}>
      <Paper elevation={3} sx={{ borderRadius: 2}}>
        <img src={item.image} alt={item.title} style={{ width: '100%', }} />
        </Paper>
        <Typography sx={{ fontSize: 12, textAlign:'center',color: grey[700] }} mt={1} >
          {item.title}    
      </Typography>
      <Typography sx={{ fontSize: 12, textAlign:'center',color: grey[700] }}  >
          {item.description}    
      </Typography>
     
    </Grid>
  ))}
</Grid>
     
      {/* <ul>
        {team.members.map((member) => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul> */}
      <Typography sx={{ fontSize: 14, textAlign:'center', }} mt={5} >
          Get in touch      
      </Typography>
      <Link href="#" underline="hover">    
      <Typography sx={{color:'black',marginTop:0, fontSize: 14, textAlign:'center', textDecoration:'underline',  fontWeight:'bold'}} mt={1}>
        {team.contact}      
      </Typography>
      </Link>
     
      {/* Render the apply button and handle application submission */}
    </div>
  );
};

export default TeamDetails;
