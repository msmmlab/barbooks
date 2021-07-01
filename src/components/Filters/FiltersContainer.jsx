import React from "react";
import "./FiltersContainer.css";
import PlatformFilter from "./PlatformFilter";
import CategoryFilter from "./CategoryFilter";
import SortOptions from "./SortOptions";

const FiltersContainer = ({ platform, setPlatform, sorter, setSorter }) => {
  return (
    <div className="FiltersContainer">
      <PlatformFilter platform={platform} setPlatform={setPlatform} />
      <CategoryFilter />
      <SortOptions sorter={sorter} setSorter={setSorter} />
    </div>
  );
};

export default FiltersContainer;
