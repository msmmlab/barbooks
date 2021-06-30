import React from "react";
import "./Dashboard.css";
import Billboard from "../VisualElements/Billboard";
import SearchBar from "../../../SearchEngine/SearchBar";

const Dashboard = () => {
  return (
    <div className="Dashboard-container">
      <Billboard />
      <SearchBar />
    </div>
  );
};

export default Dashboard;
