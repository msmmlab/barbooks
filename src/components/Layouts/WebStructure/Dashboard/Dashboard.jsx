import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Billboard from "../VisualElements/Billboard";
import SearchBar from "../../../SearchEngine/SearchBar";
import FiltersContainer from "../../../Filters/FiltersContainer";
import http from "../../../../services/http";
import GamesTable from "../../Games/GamesTable";
import Spinner from "../Images/Spinner.gif";

const Dashboard = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const { data } = await http.get("/api/games");
      setGames(data);
    };
    fetchGames();
  }, []);

  // just for prototyping the card/ GamesTable ->> to be deleted.

  if (games.length === 0) {
    return (
      <div>
        <img src={Spinner} alt="Fetching data" />
      </div>
    );
  } else {
    const game = games[2];
    console.log(game);

    return (
      <div className="Dashboard-container">
        <Billboard />
        <SearchBar />
        <FiltersContainer />
        <GamesTable game={game} />
      </div>
    );
  }
};

export default Dashboard;
