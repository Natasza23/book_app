import React, { useState } from 'react';
import '../SearchBox.css';

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Szukaj..."
        className="searchInput"
      />
      <button type="submit" className="searchButton">Szukaj</button>
    </form>
  );
};

export default SearchBox;