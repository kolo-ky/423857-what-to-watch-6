import React, {Fragment, useMemo} from 'react';

import {useSelector} from "react-redux";

// components
import MovieCardListProxy from '../../movie-card-list/movie-card-list-proxy/movie-card-list-proxy';
import MovieCard from '../../movie-card/movie-card';
import Footer from '../../footer/footer';
import GenreList from '../../genre-list/genre-list';

// selectors
import {getFilms} from "../../../store/movies/selectors";

const Main = () => {
  const films = useSelector((state) => getFilms(state));
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

export default Main;
