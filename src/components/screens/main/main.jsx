import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import {connect} from "react-redux";

// components
import MovieCardListProxy from '../../movie-card-list/movie-card-list-proxy/movie-card-list-proxy';
import MovieCard from '../../movie-card/movie-card';
import Footer from '../../footer/footer';
import GenreList from '../../genre-list/genre-list';
import Loading from '../../loading/loading';
import filmType from "../../../types/film-type";

const Main = ({loading, isFilmsAvailable, films}) => {
  if (loading) {
    return (
      <Loading/>
    );
  }

  if (!isFilmsAvailable) {
    return null;
  }

  const [posterFilm] = films;

  return (
    <Fragment>
      <MovieCard posterFilm={posterFilm}/>
      <div className="page-content">
        <section className="catalog">
          <GenreList />
          <MovieCardListProxy />
        </section>
        <Footer />
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  isFilmsAvailable: state.films.length > 0,
  films: state.films
});

Main.propTypes = {
  loading: PropTypes.bool,
  isFilmsAvailable: PropTypes.bool,
  films: PropTypes.arrayOf(
      PropTypes.shape(filmType)
  )
};

export default connect(mapStateToProps)(Main);
