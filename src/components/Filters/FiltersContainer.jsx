import React from "react";
import "./FiltersContainer.css";
import PlatformFilter from "./PlatformFilter";
import CategoryFilter from "./CategoryFilter";
import SortOptions from "./SortOptions";

const FiltersContainer = () => {
  return (
    <div className="FiltersContainer">
      <PlatformFilter />
      <CategoryFilter />
      <SortOptions />
    </div>
  );
};

export default FiltersContainer;
