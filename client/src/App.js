// App.js
import React, { useState, useEffect } from 'react';
import TeamList from './components/TeamList/TeamList';
import Filter from './components/Filter/Filter';
import { request } from 'graphql-request';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Apply from './components/Application/Apply';
import Profile from './components/Profile/Profile';
import PendingApplications from './components/Profile/PendingApplicatons';

const App = () => {
  const [teams, setTeams] = useState([]);
  const [filteredTeams, setFilteredTeams] = useState([]);
  const [filters, setFilters] = useState({ role: '', challenge: '' });

  useEffect(() => {
    // Fetch team data from the GraphQL API
    console.log('FFF');
    const fetchTeams = async () => {
      const query = `{
        teams {
          id
          title
          challengeHashtag
          description
          idea
          roles
          members {
            name
            role
          }
          contact
        }
      }`;

      try {
        const data = await request('http://localhost:5000/graphql', query);
        setTeams(data.teams);
        setFilteredTeams(data.teams);
        console.log('FFF');
        console.log(data.teams);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTeams();
  }, []);

  useEffect(() => {
    const filtered = teams.filter((team) => {
      const keywordMatch =
        !filters.keyword ||
        new RegExp(filters.keyword, 'i').test(team.roles) ||
        new RegExp(filters.keyword, 'i').test(team.challengeHashtag);
      console.log('Triggers Use Effect');
      console.log(filters);
      console.log('keyword', keywordMatch);
      console.log(
        'team role include',
        new RegExp(filters.keyword, 'i').test(team.roles)
      );
      console.log(
        'Challenge include',
        new RegExp(filters.keyword, 'i').test(team.challengeHashtag)
      );
      return keywordMatch;
    });
    setFilteredTeams(filtered);
  }, [filters, teams]);

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, keyword: value });
    console.log('value', value);
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <Filter onFilterChange={handleFilterChange} showSearch={true} />
              <Typography variant="h3" component="h1" mt={4} ml={11}>
                JOIN A TEAM
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: grey[500] }}
                component="p"
                mt={1}
                ml={11}
              >
                Apply for a role that suits you the most and join a team.
              </Typography>
              <TeamList path="/" teams={filteredTeams} />
            </div>
          }
        />
        <Route path="/apply" element={<Apply />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/pending" element={<PendingApplications />} />
      </Routes>
    </Router>
  );
};

export default App;
