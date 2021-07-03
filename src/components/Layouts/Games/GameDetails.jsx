import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./GameDetails.css";
import Spinner from "../WebStructure/Images/Spinner.gif";
import Close from "../WebStructure/Images/cancel.png";

const GameDetails = (props) => {
  const [game, setGame] = useState(null);

  useEffect(() => {
    const gameId = props.match.params.id;
    const fetchGame = async () => {
      const { data } = await axios.get(`/api/game?id=${gameId}`);

      setGame(data);
    };
    fetchGame();
  }, [props.match.params.id]);

  if (!game) {
    return (
      <div className="Loader">
        <img src={Spinner} alt="Fetching data from the server" />
      </div>
    );
  } else {
    const renderImages = () => {
      if (game.screenshots === 0) {
        return "No screenshots";
      } else {
        return game.screenshots.map((screenshot) => {
          return (
            <div className="GameDetails-screenshot" key={screenshot.image}>
              <img src={screenshot.image} alt="Screenshot" />
            </div>
          );
        });
      }
    };
    return (
      <div>
        <div className="GameDetails-container">
          <div className="GameDetails-close">
            <Link to="/">
              <img src={Close} height="20px" alt="cancel" />
            </Link>
          </div>
          <div className="GameDetails-body">
            <div className="GameDetails-thumbnail">
              <img src={game.thumbnail} alt={game.title} />
            </div>
            <div className="GameDetails-content">
              <div className="GameDetails-requirements">
                <div className="GameDetails-requirements-title">
                  Requirements
                </div>
                <div className="GameDetails-requirements-info">
                  <div className="GameDetails-requirements-item">
                    <div className="reqHeader">Graphics:</div>
                    {game.minimumSystemRequirements.graphics}
                  </div>
                  <div className="GameDetails-requirements-item">
                    <div className="reqHeader">Memory:</div>
                    {game.minimumSystemRequirements.memory}
                  </div>
                  <div className="GameDetails-requirements-item">
                    <div className="reqHeader">Os:</div>
                    {game.minimumSystemRequirements.os}
                  </div>
                  <div className="GameDetails-requirements-item">
                    <div className="reqHeader">Processor:</div>
                    {game.minimumSystemRequirements.processor}
                  </div>
                  <div className="GameDetails-requirements-item">
                    <div className="reqHeader">Storage:</div>
                    {game.minimumSystemRequirements.storage}
                  </div>
                </div>
              </div>
              <div className="GameDetails-description">
                <div className="GameDetails-title">{game.title}</div>
                <div className="GameDetails-about">{game.description}</div>
              </div>
            </div>
          </div>
          <div className="GameDetails-Images">{renderImages()}</div>
        </div>
      </div>
    );
  }
};

export default GameDetails;
