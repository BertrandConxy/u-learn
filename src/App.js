import React, { useState } from 'react';
import Box from '@mui/material/Box';
import LeftNav from './components/LeftNav';
import TopBar from './components/TopBar';
import Main from './components/Main';

const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <TopBar handleDrawerToggle={handleDrawerToggle} />
      <LeftNav mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <Main />
    </Box>
  );
};

export default App;
