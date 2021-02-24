import React from 'react';
import PropTypes from "prop-types";
import filmType from "../../../../types/film-type";

const Details = ({film}) => {
  const getStarring = () => {
    let starringString = ``;

    film.starring.forEach((item, index) => {
      if (index >= film.starring.length) {
        starringString = starringString + item;
      }

      starringString = starringString + `${item}<br/>`;
    });

    return starringString;
  };

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{film.director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value" dangerouslySetInnerHTML={{__html: getStarring()}} />
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{film.runTime} min</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{film.genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{film.released}</span>
        </p>
      </div>
    </div>
  );
};

Details.propTypes = {
  film: PropTypes.shape(filmType)
};

export default Details;
