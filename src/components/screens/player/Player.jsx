import React from 'react';
import PropTypes from "prop-types";
import {Link, useParams} from "react-router-dom";

// types
import filmType from "../../../types/film-type";

// routes
import {getRoute} from "../../../routes/routes";

const Player = ({films}) => {
  const {id} = useParams();
  const film = films.find((item) => item.id === Number(id));

  return (
    <div className="player">
      <video src="#" className="player__video" poster="img/player-poster.jpg"></video>

      <Link to={getRoute(`film`, film.id)}>
        <button type="button" className="player__exit">Exit</button>
      </Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{film.title}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmType)
  ),
};

export default Player;
