import React, { useState } from "react";
import "./SearchBar.css";
import MagnifyingGlass from "../Layouts/WebStructure/Images/magnifying-glass.png";
import Cancel from "../Layouts/WebStructure/Images/cancel.png";

const SearchBar = ({ title, setTitle }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle(userInput);
    setUserInput("");
  };
  return (
    <div className=" SearchBar-container">
      <div className="SearchBar-input">
        <div className="SearchBar-input-icon">
          <img src={MagnifyingGlass} height="20px" alt="search games" />
        </div>
        <div className="searchBar-input-input">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={title ? title : "Search by Name..."}
              name="search"
              autoComplete="off"
              size="30"
              value={userInput}
              onChange={handleChange}
            />
          </form>
        </div>
        {title && (
          <div className="SearchBar-input-icon">
            {" "}
            <img
              src={Cancel}
              height="20px"
              alt="cancel search"
              onClick={handleSubmit}
              style={{ cursor: "pointer" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
