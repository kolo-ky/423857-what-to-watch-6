import React, {Fragment, useMemo} from 'react';
import PropTypes from 'prop-types';

import {connect} from "react-redux";

// components
import MovieCardListProxy from '../../movie-card-list/movie-card-list-proxy/movie-card-list-proxy';
import MovieCard from '../../movie-card/movie-card';
import Footer from '../../footer/footer';
import GenreList from '../../genre-list/genre-list';
import filmType from "../../../types/film-type";

// selectors
import {getFilms} from "../../../store/movies/selectors";

const Main = ({films}) => {
  const posterFilm = useMemo(() => films && films[0], [films]);

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
  films: getFilms(state)
});

Main.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmType)
  )
};

export default connect(mapStateToProps)(Main);
