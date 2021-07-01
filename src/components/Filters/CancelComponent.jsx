import React from "react";
import "./CancelComponent.css";
import Cancel from "../Layouts/WebStructure/Images/cancel.png";

const CancelComponent = ({ setSorter, setCategory, setPlatform }) => {
  const handleClearClick = () => {
    setSorter("Relevance");
    setCategory("");
    setPlatform("All");
  };
  return (
    <div className="ClearFilters">
      <div className="ClearFilter-label">Reset filters</div>

      <img
        src={Cancel}
        alt="clear filters"
        height="20px"
        onClick={handleClearClick}
      />
    </div>
  );
};

export default CancelComponent;
