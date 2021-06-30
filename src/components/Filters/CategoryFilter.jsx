import React from "react";
import "./CategoryFilter.css";

const CategoryFilter = () => {
  return (
    <div className="CategoryFilter">
      <div className="CategoryFilter-label">Filter by Category</div>
      <div className="CategoryFilter-input">
        <input
          type="text"
          name="category"
          autoComplete="off"
          placeholder="Start typing..."
          size="20"
        />
      </div>
    </div>
  );
};

export default CategoryFilter;
