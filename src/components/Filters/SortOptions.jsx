import React from "react";
import "./PlatformFilter.css";

const SortOptions = () => {
  return (
    <div className="PlatformFilter">
      <div className="PlatformFilter-label">Sort By</div>
      <div className="PlatformFilter-select">
        <select name="sort">
          <option value="all">Release Date</option>
          <option value="pc">Alphabetical</option>
          <option value="browser">Relevance</option>
        </select>
      </div>
    </div>
  );
};

export default SortOptions;
