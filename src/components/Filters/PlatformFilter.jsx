import React from "react";
import "./PlatformFilter.css";

const PlatformFilter = () => {
  return (
    <div className="PlatformFilter">
      <div className="PlatformFilter-label">Filter by Platform</div>
      <div className="PlatformFilter-select">
        <select name="platform">
          <option value="all">All</option>
          <option value="pc">PC</option>
          <option value="browser">Browser</option>
        </select>
      </div>
    </div>
  );
};

export default PlatformFilter;
