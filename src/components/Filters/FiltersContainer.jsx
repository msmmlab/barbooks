import React from "react";
import "./FiltersContainer.css";
import PlatformFilter from "./PlatformFilter";
import CategoryFilter from "./CategoryFilter";
import SortOptions from "./SortOptions";
import CancelComponent from "./CancelComponent";

const FiltersContainer = ({
  platform,
  setPlatform,
  sorter,
  setSorter,
  category,
  setCategory,
}) => {
  return (
    <div className="FiltersContainer">
      <PlatformFilter platform={platform} setPlatform={setPlatform} />
      <CategoryFilter category={category} setCategory={setCategory} />
      <SortOptions sorter={sorter} setSorter={setSorter} />
      {category && (
        <CancelComponent
          setSorter={setSorter}
          setCategory={setCategory}
          setPlatform={setPlatform}
        />
      )}
    </div>
  );
};

export default FiltersContainer;
