import React from "react";
import "./Dashboard.css";
import Billboard from "../VisualElements/Billboard";
import SearchBar from "../../../SearchEngine/SearchBar";
import FiltersContainer from "../../../Filters/FiltersContainer";

const Dashboard = () => {
  return (
    <div className="Dashboard-container">
      <Billboard />
      <SearchBar />
      <FiltersContainer />
    </div>
  );
};

export default Dashboard;
