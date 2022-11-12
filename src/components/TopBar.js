import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FaUser } from 'react-icons/fa';

const drawerWidth = 300;
const TopBar = ({ handleDrawerToggle }) => (
  <Box sx={{ display: 'flex' }}>
    <AppBar
      color="transparent"
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: '100%',
            mr: 10,
          }}
        >
          <div className="image-holder">
            <img
              src="https://countryflagsapi.com/png/in"
              alt="logo"
              style={{ width: '100%', borderRadius: '1rem' }}
            />
          </div>
          <ArrowDropDownIcon />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <div className="user-round">
            <FaUser className="icon" />
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
);

TopBar.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default TopBar;
