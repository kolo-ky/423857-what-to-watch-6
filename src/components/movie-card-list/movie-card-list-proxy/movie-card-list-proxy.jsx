import React from 'react';
import PropTypes from 'prop-types';

// redux
import {connect} from 'react-redux';

// component
import MovieCardList from "../movie-card-list";

const MovieCardListProxy = ({moreLikeThis, genre, getFilteredFilms}) => {
  const films = getFilteredFilms(moreLikeThis, genre);

  return (
    <MovieCardList films={films}/>
  );
};

const mapStateToProps = (state) => ({
  getFilteredFilms: (moreLikeThis, genre) => {

    if (moreLikeThis && genre) {

      return state.films.filter((film) => film.genre === genre);
    }

    if (state.genre) {
      return state.films.filter((film) => film.genre === state.genre);
    }

    return state.films;
  },
});

MovieCardListProxy.propTypes = {
  moreLikeThis: PropTypes.bool,
  genre: PropTypes.string,
  getFilteredFilms: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(MovieCardListProxy);
