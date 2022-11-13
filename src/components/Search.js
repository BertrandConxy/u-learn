import React from 'react';
import Box from '@mui/material/Box';
import { GrSearch } from 'react-icons/gr';

const Search = () => (
  <>
    <Box sx={{ display: 'flex', mt: 2, alignItems: 'center' }}>
      <div className="search-container">
        <input
          className="search-input"
          placeholder="Search Tutor"
          type="search"
        />
        <GrSearch className="search-icon" />
      </div>
    </Box>
  </>
);

export default Search;
