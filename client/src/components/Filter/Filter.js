import React, { useState } from 'react';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Link from '@mui/material/Link';
import { Link as RouterLink } from "react-router-dom";



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));




const Filter = ({ onFilterChange , showSearch}) => {
  if (onFilterChange){
  const handleFilterChange = (event) => {
   
    onFilterChange(event.target.name, event.target.value);
    }
  };

  const [anchorEl, setAnchorEl] = useState(null)
  const handleClose = () => {
    setAnchorEl(null);
  };

  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    // <div>
    //   <label htmlFor="roleFilter">Role:</label>
    //   <select name="roleFilter" onChange={handleFilterChange}>
    //     {/* Render role options */}
    //   </select>
    //   <label htmlFor="challengeFilter">Challenge:</label>
    //   <select name="challengeFilter" onChange={handleFilterChange}>
    //     {/* Render challenge options */}
    //   </select>
    // </div>

    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{ backgroundColor: '#000' }}>
      <Toolbar>
      <Link style={{textDecoration:'none', color:'white'}}  component={RouterLink} to="/"> 

        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        </Link>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          Junction

        </Typography>

      {showSearch && 
      
      <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
      
      
      }
       
        {/* <nav>
          <Link to="/pending">  */}
          {/* profile */}
          <div>
        <IconButton
        onClick={handleMenu}
        sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://api.dicebear.com/6.x/adventurer/svg?seed=Sophie" />
        </IconButton>
        <Menu
                id="menu-appbar"
                backgroundColor="black"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                
                PaperProps={{
                  sx: {
                    backgroundColor: 'black', // Set the background color to black
                  },
                }}
              >

        <Link style={{textDecoration:'none'}}  component={RouterLink} to="/profile">
                <MenuItem                 sx={{color:'white',}}
                >

                  User</MenuItem>
                  </Link>
                  <Link style={{textDecoration:'none'}}  component={RouterLink} to="/pending"> 
                <MenuItem  
                                sx={{color:'white'}}
                >Server</MenuItem>
                </Link>
              </Menu>
              </div>
        {/* </Link>
        </nav> */}
      </Toolbar>
    </AppBar>
  </Box>
  );
};

export default Filter;
