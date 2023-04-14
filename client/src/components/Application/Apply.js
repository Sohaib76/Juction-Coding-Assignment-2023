import React, { useState, useEffect } from 'react';
import Filter from '../Filter/Filter';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import Send from './Send';
import { useLocation } from 'react-router-dom';
import { request } from 'graphql-request';

const Apply = () => {
  let { state } = useLocation();

  const [user, setUser] = useState([]);

  console.log('asfas', state);

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
    <div style={{ marginBottom: 25 }}>
      <Filter showSearch={false} />
      <Typography variant="h3" component="h1" mt={4} ml={11}>
        APPLY
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ color: grey[500] }}
        component="p"
        mt={1}
        ml={11}
      >
        Send your profile information and motivation message to {state.title}
      </Typography>
      <Send data={state} user={user} />
    </div>
  );
};

export default Apply;
