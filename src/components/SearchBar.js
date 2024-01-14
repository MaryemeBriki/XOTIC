import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <form className="search">
      <input type="text" placeholder="Search" className="search__input" />
      <button type="button" className="search__button">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
