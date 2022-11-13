import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Search from './Search';

const Main = () => (
  <Box
    component="main"
    sx={{ flexGrow: 1, p: 3, width: { sm: 'calc(100% - 300px)' } }}
  >
    <Toolbar />
    <Box sx={{ mt: 4 }}>
      <Search />
    </Box>
  </Box>
);

export default Main;
