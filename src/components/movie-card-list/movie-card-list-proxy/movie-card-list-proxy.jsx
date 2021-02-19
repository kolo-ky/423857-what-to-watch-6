import React from 'react';
import PropTypes from 'prop-types';

// redux
import {connect} from 'react-redux';

// component
import MovieCardList from "../movie-card-list";

const MovieCardListProxy = ({filmGenre, getFilteredFilms}) => {
  const films = getFilteredFilms(filmGenre);

  return (
    <MovieCardList films={films}/>
  );
};

const mapStateToProps = (state) => ({
  getFilteredFilms: (filmGenre) => {

    if (filmGenre) {
      return state.films.filter((film) => film.genre === filmGenre);
    }

    if (state.genre) {
      return state.films.filter((film) => film.genre === state.genre);
    }

    return state.films;
  },
});

MovieCardListProxy.propTypes = {
  filmGenre: PropTypes.string,
  getFilteredFilms: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(MovieCardListProxy);
