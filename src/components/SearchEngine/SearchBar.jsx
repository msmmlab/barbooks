import React from "react";
import "./SearchBar.css";
import MagnifyingGlass from "../Layouts/WebStructure/Images/magnifying-glass.png";

const SearchBar = () => {
  return (
    <div className=" SearchBar-container">
      <div className="SearchBar-input">
        <div className="SearchBar-input-icon">
          <img src={MagnifyingGlass} height="20px" alt="search games" />
        </div>
        <div className="searchBar-input-input">
          <input
            type="text"
            placeholder="Search by Name..."
            name="search"
            autoComplete="off"
            size="40"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
