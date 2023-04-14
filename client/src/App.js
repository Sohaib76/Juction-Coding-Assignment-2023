// App.js
import React, { useState, useEffect } from 'react';
import TeamList from './components/TeamList/TeamList';
import Filter from './components/Filter/Filter';
import { request } from 'graphql-request';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Apply from './components/Application/Apply';
import Profile from './components/Profile/Profile';
import PendingApplications from './components/Profile/PendingApplicatons';




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
      // const roleMatch = !filters.role || team.roles.includes(filters.role);
      // const challengeMatch = !filters.challenge || team.challenge === filters.challenge;
      // console.log("Triggers Use Effect")
      // console.log(filters, roleMatch)
      // console.log("team role include", team.roles.includes(filters.role))
      // return roleMatch && challengeMatch;
      
      // const roleMatch = !filters.role || new RegExp(filters.role, 'i').test(team.roles);
      // const challengeMatch = !filters.role || new RegExp(filters.challenge, 'i').test(team.challenge);
      // console.log("Triggers Use Effect");
      // console.log(filters, roleMatch);
      // console.log("team role include", new RegExp(filters.role, 'i').test(team.roles));
      // console.log("Challange include", new RegExp(filters.role, 'i').test(team.challenge));
      // return roleMatch && challengeMatch;

      const keywordMatch = !filters.keyword || new RegExp(filters.keyword, 'i').test(team.roles) || new RegExp(filters.keyword, 'i').test(team.challengeHashtag);
      console.log("Triggers Use Effect");
      console.log(filters);
      console.log("keyword", keywordMatch);
      console.log("team role include", new RegExp(filters.keyword, 'i').test(team.roles));
      console.log("Challenge include", new RegExp(filters.keyword, 'i').test(team.challengeHashtag));
      return keywordMatch;

      // const roleMatch = !filters.role || team.roles.includes(filters.role);
      // const challengeMatch = !filters.challenge || team.challenge === filters.challenge;
      // console.log("Triggers Use Effect")
      // console.log(filters, roleMatch)
      // return roleMatch && challengeMatch;
      
    });
    setFilteredTeams(filtered);
  }, [filters, teams]);

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, keyword: value });
    // setFilters({ ...filters, ["role"]: value });
    console.log("value",value);
  };

  return (
    <Router>
    
     
      {/* <h1>JOIN A TEAM</h1> */}
      
      <Routes>
          <Route exact path="/" element={
            <div>
             <Filter onFilterChange={handleFilterChange} showSearch={true} />
             <Typography variant="h3" component="h1" mt={4} ml={11}>
               JOIN A TEAM
             </Typography>
             <Typography variant="subtitle2" sx={{ color: grey[500] }} component="p" mt={1} ml={11}>
               Apply for a role that suits you the most and join a team.
             </Typography>
          <TeamList path="/" teams={filteredTeams} />
          </div>
          } />
          <Route path="/apply" element={<Apply/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/pending" element={<PendingApplications/>} />
        </Routes>
   
    </Router>
  );
};

export default App;
