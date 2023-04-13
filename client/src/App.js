// App.js
import React, { useState, useEffect } from 'react';
import TeamList from './components/TeamList/TeamList';
import Filter from './components/Filter/Filter';
import { request } from 'graphql-request';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';



const App = () => {
  const [teams, setTeams] = useState([]);
  const [filteredTeams, setFilteredTeams] = useState([]);
  const [filters, setFilters] = useState({ role: '', challenge: '' });

  // useEffect(() => {
  //   // Fetch team data from the API
  //   fetch('/api/teams')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setTeams(data);
  //       setFilteredTeams(data);
  //     });
  // }, []);

  useEffect(() => {
    // Fetch team data from the GraphQL API
    console.log("FFF");
    const fetchTeams = async () => {
      const query = `{
        teams {
          id
          title
          challengeHashtags
          description
          idea
          roles
          members {
            name
          }
          contact
        }
      }`;
      
    

    try {
      const data = await request('http://localhost:5000/graphql', query);
      setTeams(data.teams);
      setFilteredTeams(data.teams);
      console.log("FFF");
      console.log(data.teams);
    } catch (error) {
      console.error(error);
    }
    };
    
    fetchTeams();
    }, []);

  useEffect(() => {
    const filtered = teams.filter((team) => {
      // Apply the filters
      const roleMatch = !filters.role || team.roles.includes(filters.role);
      const challengeMatch = !filters.challenge || team.challenge === filters.challenge;
      return roleMatch && challengeMatch;
    });
    setFilteredTeams(filtered);
  }, [filters, teams]);

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div>
      <Filter onFilterChange={handleFilterChange} />
      <Typography variant="h3" component="h1" mt={6} ml={11}>
        JOIN A TEAM
      </Typography>
      <Typography variant="subtitle2" sx={{ color: grey[500] }} component="p" mt={1} ml={11}>
        Apply for a role that suits you the most and join a team.
      </Typography>
      {/* <h1>JOIN A TEAM</h1> */}
      <TeamList teams={filteredTeams} />
    </div>
  );
};

export default App;
