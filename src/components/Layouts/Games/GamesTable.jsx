import React from "react";

const GamesTable = ({ game }) => {
  return (
    <div>
      <h1>GamesTable</h1>
      <p>{game.title}</p>
      <img src={game.thumbnail} />
    </div>
  );
};

export default GamesTable;
