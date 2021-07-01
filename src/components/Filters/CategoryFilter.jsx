import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CategoryFilter.css";

const CategoryFilter = ({ category, setCategory }) => {
  const [categories, setCategories] = useState([]);
  const [userInput, setUserInput] = useState(category);

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await axios.get("/api/categories");
      setCategories(data);
    };
    getCategories();
  }, []);

  const handleCategory = (e) => {
    setUserInput(e.target.value);
  };

  const handleCategoryClick = (name) => {
    setCategory(name);
    setUserInput("");
  };

  const renderCategories = () => {
    let matchingCategories = categories.filter((category) =>
      category.toLowerCase().includes(userInput.toLowerCase())
    );
    return matchingCategories.map((name) => {
      return (
        <div
          className="Category-name"
          key={name}
          onClick={() => handleCategoryClick(name)}
        >
          {name}
        </div>
      );
    });
  };

  return (
    <div className="CategoryFilter">
      <div className="CategoryFilter-label">Filter by Category</div>
      <div className="CategoryFilter-input">
        <input
          type="text"
          name="category"
          autoComplete="off"
          placeholder={category ? category : "Start typing..."}
          size="20"
          value={userInput}
          onChange={handleCategory}
        />
        {userInput && (
          <div className="Category-choose">{renderCategories()}</div>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;
