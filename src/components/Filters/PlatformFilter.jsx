import React from "react";
import "./PlatformFilter.css";

const options = [
  {
    label: "All",
    value: "All",
  },
  {
    label: "PC",
    value: "PC",
  },
  {
    label: "Browser",
    value: "Browser",
  },
];

const PlatformFilter = ({ platform, setPlatform }) => {
  console.log("received: ", platform);
  console.log("filter platform: ", platform);

  const optionsFiltered = options.filter((option) => option.value !== platform);

  const handlePlatformChange = (e) => {
    setPlatform(e.target.value);
  };

  return (
    <div className="PlatformFilter">
      <div className="PlatformFilter-label">Filter by Platform</div>
      <div className="PlatformFilter-select">
        <select name="platform" onChange={handlePlatformChange}>
          <option value={platform}>{platform}</option>
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

export default PlatformFilter;
