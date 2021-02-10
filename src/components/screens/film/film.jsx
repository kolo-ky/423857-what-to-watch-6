import React, {Fragment} from 'react';
import PropTypes from "prop-types";

// types
import filmType from "../../../types/film-types";
import matchId from '../../../types/match-id';

// helpers
import getMoreFilms from '../../../helpers/get-more-films';

// components
import Footer from '../../footer/footer';
import MovieCardList from '../../movie-card-list/movie-card-list';
import MovieCardFull from "../../movie-card-full/movie-card-full";

const Film = (props) => {
  const {films, match, history} = props;
  const film = films.find((item) => item.id === Number(match.params.id));

  const moreFilmsList = getMoreFilms(films);

  return (
    <Fragment>
      <MovieCardFull film={film} history={history}/>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieCardList films={moreFilmsList} />
        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

Film.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmType)
  ),
  match: PropTypes.shape(matchId),
  history: PropTypes.object
};

export default Film;
