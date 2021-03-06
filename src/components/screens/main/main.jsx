import React, {Fragment} from 'react';

// components
import MovieCardListProxy from '../../movie-card-list/movie-card-list-proxy/movie-card-list-proxy';
import MovieCard from '../../movie-card/movie-card';
import Footer from '../../footer/footer';
import GenreList from '../../genre-list/genre-list';

const Main = () => {
  return (
    <Fragment>
      <MovieCard />
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
