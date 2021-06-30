import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Billboard from "../VisualElements/Billboard";
import SearchBar from "../../../SearchEngine/SearchBar";
import FiltersContainer from "../../../Filters/FiltersContainer";
import http from "../../../../services/http";
import { ApiUrl } from "../../../../config/Api";

const Dashboard = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const { data } = await http.get(ApiUrl);
      console.log(data);
    };
    fetchGames();
  }, []);

  return (
    <div className="Dashboard-container">
      <Billboard />
      <SearchBar />
      <FiltersContainer />
    </div>
  );
};

export default Dashboard;
