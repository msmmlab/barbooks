import React from "react";
import "./PlatformFilter.css";

const options = [
  {
    label: "Release-Date",
    value: "Release-Date",
  },
  {
    label: "Alphabetical",
    value: "Alphabetical",
  },
  {
    label: "Relevance",
    value: "Relevance",
  },
];

const SortOptions = ({ sorter, setSorter }) => {
  const optionsFiltered = options.filter((option) => option.value !== sorter);

  const handleSortingChange = (e) => {
    setSorter(e.target.value);
  };

  return (
    <div className="PlatformFilter">
      <div className="PlatformFilter-label">Sort By</div>
      <div className="PlatformFilter-select">
        <select name="sort" onChange={handleSortingChange}>
          <option value={sorter}>{sorter}</option>
          {optionsFiltered.map((option) => {
            return (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default SortOptions;
