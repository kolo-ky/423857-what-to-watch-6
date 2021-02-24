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
      if (index >= MAX_STARRING - 1) {
        return item;
      }
      return `${item}, `;
    });
  };
  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{film.ratingScore}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
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
