import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

// components
import MovieCardListItem from "../movie-card-list-item/movie-card-list-item";
import filmType from "../../types/film-type";

const MovieCardList = ({films, children}) => {
  return (
    <Fragment>
      <div className="catalog__movies-list" >
        {films.map((film) => (
          <MovieCardListItem
            key={`$-movie-card-key-${film.id}`}
            film={film}
          />
        ))}
      </div>
      {children}
    </Fragment>
  );
};

MovieCardList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmType)
  ),
  children: PropTypes.node,
};

export default MovieCardList;
