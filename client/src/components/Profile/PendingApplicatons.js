import React, {useEffect, useState} from 'react'
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
import ApplicantData from './ApplicantData';
import { Grid } from '@mui/material';
import { request } from 'graphql-request';


const PendingApplicatons = () => {


    const applicants = [
        { id: 1 },
        { id: 2 },
        // { id: 3 },
        // { id: 4 },
        // Add more applicants if needed
      ];

      const [user, setUser] = useState([]);

      useEffect(() => {
        // Fetch user data from the GraphQL API
        const fetchUsers = async () => {
          const query = `{
            users {
                user_id
                name
                title
                image
                about
                linkedin
                insta
                applicationLetter
                isAccepted
                skills {
                  name
                  level
                }
                contact
              }
          }`;
          
        
    
        try {
          const data = await request('http://localhost:5000/graphql', query);
          setUser(data.users);
          console.log(data.users);
        } catch (error) {
          console.error(error);
        }
        };
        
        fetchUsers();
        }, []);
    
  return (
    <div>
        <Filter showSearch={false}/>
        <div style={{marginTop:40, marginLeft:40, margingBottom:40}}>
        <Typography variant="h3" component="h1" mt={2} ml={2}>
                PENDING APPLICATIONS
            </Typography>
            <Typography ml={2} sx={{ fontSize: 14, color: grey[500] }} gutterBottom>
                See the list of people wanting to join your team
        </Typography> 
        </div>
     
        <Grid style={{marginLeft:18, marginBottom:15}} container spacing={1}>
      {user.map((applicant) => (
        <Grid key={applicant.id} item xs={12} md={6}>
          <ApplicantData applicant={applicant}/>
        </Grid>
      ))}
    </Grid>
   
      </div>
       )
}

export default PendingApplicatons
