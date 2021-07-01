import React from "react";
import { Link } from "react-router-dom";
import "./GameCard.css";

// const game = {
//     developer: "Phoenix Labs, Iron Galaxy",
//     genre: "MMORPG",
//     id: 1,
//     platform: "PC (Windows)",
//     publisher: "Phoenix Labs",
//     releaseDate: "2019-05-21",
//     shortDescription:
//       "A free-to-play, co-op action RPG with gameplay similar to Monster Hunter.",
//     thumbnail: "/g/1/thumbnail.jpg",
//     title: "Dauntless",
//   };

const GameCard = ({ game }) => {
  const renderTitle = () => {
    if (game.title.length > 26) {
      const short = game.title.slice(0, 20);
      return `${short}...`;
    } else {
      return game.title;
    }
  };

  return (
    <div className="GameCard">
      <div className="GameCard-title">{renderTitle()}</div>
      <div className="GameCard-body">
        <div className="GameCard-thumbnail">
          <img src={game.thumbnail} alt={game.title} width="200px" />
        </div>
        <div className="GameCard-content">
          <div className="GameCard-description">{game.shortDescription}</div>
          <div className="GameCard-link">
            <Link to={`/${game.id}`}>View more {">"}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
