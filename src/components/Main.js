import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Search from './Search';
import CardGrid from './CardGrid';
import Footer from './Footer';

const Main = () => (
  <Box
    component="main"
    sx={{ flexGrow: 1, p: 3, width: { sm: 'calc(100% - 300px)' } }}
  >
    <Toolbar />
    <Box sx={{ mt: 4 }}>
      <Search />
    </Box>
    <Toolbar />
    <Box sx={{ mt: 4 }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Online Tutors</Typography>
      <CardGrid />
    </Box>
    <Footer />
  </Box>
);

export default Main;
