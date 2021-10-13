import React from "react";
import { RiSearchLine } from "react-icons/ri";

const SearchBar = () => {
  return (
    <div className="search-bar text-primary">
      <RiSearchLine className="search-bar-icon" />
      <input className="text-primary" type="text" name="searchString" id="searchString" placeholder="Search" />
    </div>
  );
};

export default SearchBar;