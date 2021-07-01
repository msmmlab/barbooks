import React, { useState, useEffect } from "react";
import http from "../../../services/http";
import Spinner from "../WebStructure/Images/Spinner.gif";
import GameCard from "./GameCard";
import "./GamesTable.css";

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
    // just for testing ==> to be deleted.
    const game = {
      developer: "Phoenix Labs, Iron Galaxy",
      genre: "MMORPG",
      id: 1,
      platform: "PC (Windows)",
      publisher: "Phoenix Labs",
      releaseDate: "2019-05-21",
      shortDescription:
        "A free-to-play, co-op action RPG with gameplay similar to Monster Hunter.",
      thumbnail: "/g/1/thumbnail.jpg",
      title: "Dauntless",
    };
    return (
      <div className="GameCardContainer">
        {games.map((game) => {
          return <GameCard game={game} key={game.id} />;
        })}
      </div>
    );
  }
};

export default GamesTable;
