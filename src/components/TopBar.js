import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FaUser } from 'react-icons/fa';
import HideOnScroll from './HideOnScroll';

const drawerWidth = 320;
const TopBar = ({ handleDrawerToggle }) => (
  <Box sx={{ display: 'flex' }}>
    <HideOnScroll>
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
                style={{ width: '100%', borderRadius: '0.6rem' }}
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
            <a href="#login" className="link">
              <div className="user-round">
                <FaUser className="icon" />
              </div>
            </a>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  </Box>
);

TopBar.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default TopBar;
