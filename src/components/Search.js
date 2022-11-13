import React from 'react';
import { GrSearch } from 'react-icons/gr';

const Search = () => (
  <>
    <div className="search-container">
      <input
        className="search-input"
        placeholder="Search Tutor"
        type="search"
      />
      <GrSearch className="search-icon" />
    </div>
  </>
);

export default Search;
