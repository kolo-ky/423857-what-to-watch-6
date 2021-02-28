import React, {Fragment} from 'react';
import PropTypes from "prop-types";

// types
import filmType from "../../../../types/film-type";

const MAX_STARRING = 4;

const OverView = ({film}) => {
  const getStarring = () => {
    if (film.starring.length > MAX_STARRING) {
      return film.starring.slice(0, MAX_STARRING).map((item, index) => {
        if (index >= MAX_STARRING - 1) {
          return `${item} and other`;
        }
        return `${item}, `;
      });
    }

    return film.starring.map((item, index) => {
      if (index >= film.starring.length - 1) {
        return item;
      }
      return `${item}, `;
    });
  };

  const movieLevels = [
    {
      name: `Very bad...`,
      rating: 1
    },
    {
      name: `Bad`,
      rating: 3
    },
    {
      name: `Not bad`,
      rating: 5
    },
    {
      name: `Good`,
      rating: 6
    },
    {
      name: `Very good`,
      rating: 8
    },
    {
      name: `Awesome!`,
      rating: 10
    }
  ];

  const getMovieLevel = (rating) => {
    return movieLevels.find((level) => level.rating >= rating).name;
  };

  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{film.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getMovieLevel(film.rating)}</span>
          <span className="movie-rating__count">{film.ratingCount}</span>
        </p>
      </div>

      <div className="movie-card__text">
        <div dangerouslySetInnerHTML={{__html: film.description}} />
        <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

        <p className="movie-card__starring"><strong>
          Starring:
          {getStarring()}
        </strong></p>
      </div>
    </Fragment>
  );
};

OverView.propTypes = {
  film: PropTypes.shape(filmType)
};

export default OverView;
