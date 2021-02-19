import React, {Fragment} from 'react';
import PropTypes from "prop-types";
import {useParams} from 'react-router-dom';

// types
import filmType from "../../../types/film-types";

// components
import Footer from '../../footer/footer';
import MovieCardListProxy from '../../movie-card-list/movie-card-list-proxy/movie-card-list-proxy';
import MovieCardFull from "../../movie-card-full/movie-card-full";

const Film = (props) => {
  const {films} = props;
  const {id} = useParams();

  const film = films.find((item) => item.id === Number(id));

  return (
    <Fragment>
      <MovieCardFull film={film}/>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieCardListProxy moreLikeThis={true} genre={film.genre} />
        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

Film.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmType)
  )
};

export default Film;
