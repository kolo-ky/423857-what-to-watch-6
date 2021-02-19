import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

// components
import MovieCardList from '../../movie-card-list/movie-card-list';
import MovieCard from '../../movie-card/movie-card';
import Footer from '../../footer/footer';
import GenreList from '../../genre-list/genre-list';

// types
import filmType from '../../../types/film-types';

const Main = (props) => {
  const {posterFilm} = props;

  return (
    <Fragment>
      <MovieCard film={posterFilm}/>

      <div className="page-content">
        <section className="catalog">
          <GenreList />
          <MovieCardList />
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

Main.propTypes = {
  posterFilm: PropTypes.shape(filmType)
};

export default Main;
