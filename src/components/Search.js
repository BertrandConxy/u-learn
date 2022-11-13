import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { GrSearch } from 'react-icons/gr';
import data from '../storage/data.json';

const Search = () => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const handleSearch = (event) => {
    const searchWord = event.target.value;
    setSearch(searchWord);
    const newFilter = data.filter((value) => value.name.toLowerCase()
      .includes(searchWord.toLowerCase()));
    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <>
      <div className="search-container">
        <Box position="relative" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <input
            className="search-input"
            value={search}
            onChange={handleSearch}
            placeholder="Search Tutor"
            type="search"
          />
          <GrSearch className="search-icon" />
        </Box>
        {filteredData.length !== 0 && (
        <Box className="data-result">
          {filteredData.map((value) => (
            <Box className="data-item" key={value.name}>
              <Typography variant="body1" sx={{ fontSize: '1.5rem', mx: 1, my: '4px' }} component="div">
                <a href="#tutor" className="link">{value.name}</a>
              </Typography>
              <Divider />
            </Box>
          ))}
        </Box>
        )}
      </div>
    </>
  );
};

export default Search;
