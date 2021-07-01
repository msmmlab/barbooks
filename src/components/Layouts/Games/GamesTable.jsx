import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../WebStructure/Images/Spinner.gif";
import GameCard from "./GameCard";
import "./GamesTable.css";

const GamesTable = ({ platform, category, title, sorter }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const constructEndpoint = () => {
      let endpoint = "/api/games";
      if (platform || category || sorter) {
        endpoint += "?";

        if (platform && category && sorter) {
          endpoint += `platform=${platform}&category=${category}&sort-by=${sorter}`;
          let finalEndpoint = endpoint.toLocaleLowerCase();
          return finalEndpoint;
        }
        if (platform && category) {
          endpoint += `platform=${platform}&category=${category}`;
        }
        if (category && sorter) {
          endpoint += `category=${category}&sort-by=${sorter}`;
        }

        if (platform && sorter) {
          endpoint += `platform=${platform}&sort-by=${sorter}`;
        }

        let finalEndpoint = endpoint.toLocaleLowerCase();

        return finalEndpoint;
      }
    };

    setGames([]);
    const fetchAllGames = async () => {
      const { data } = await axios.get(`${constructEndpoint()}`);

      if (title) {
        const dataFiltered = data.filter((game) =>
          game.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
        );

        if (dataFiltered.length > 0) {
          setGames(dataFiltered);
        } else {
          setGames(data);
        }
      } else {
        setGames(data);
      }
    };
    fetchAllGames();
  }, [platform, category, sorter, title]);

  if (games.length === 0) {
    return (
      <div className="Loader">
        <img src={Spinner} alt="Fetching data from the server" />
      </div>
    );
  } else {
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
