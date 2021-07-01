import React, { useState, useEffect } from "react";
import http from "../../../services/http";
import Spinner from "../WebStructure/Images/Spinner.gif";

const GamesTable = ({ platform, category, title, sorter }) => {
  const [games, setGames] = useState([]);
  console.log("games table platform: ", platform);

  useEffect(() => {
    const fetchAllGames = async () => {
      const { data } = await http.get("/api/games");
      setGames(data);
    };
    fetchAllGames();
  }, []);

  if (games.length === 0) {
    return (
      <div className="Loader">
        <img src={Spinner} alt="Fetching data from the server" />
      </div>
    );
  } else {
    return (
      <div></div>
      // <div>
      //   <h1>GamesTable</h1>
      //   <p>{game.title}</p>
      //   <img src={game.thumbnail} />
      // </div>
    );
  }
};

export default GamesTable;
