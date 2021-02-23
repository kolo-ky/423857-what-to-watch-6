import React from 'react';
import PropTypes from "prop-types";
import {useHistory} from 'react-router-dom';

// types
import filmType from '../../types/film-types';

// components
import AppHeader from '../app-header/app-header';

// routes
import {getRoute} from "../../routes/routes";

const MovieCard = ({posterFilm}) => {
  const history = useHistory();

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={posterFilm.background_image} alt={posterFilm.name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <AppHeader />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={posterFilm.poster_image} alt={posterFilm.name} width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{posterFilm.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{posterFilm.genre}</span>
              <span className="movie-card__year">{posterFilm.released}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button" onClick={() => history.push(getRoute(`player`, posterFilm.id))}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"/>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"/>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

MovieCard.propTypes = {
  posterFilm: PropTypes.shape(filmType)
};

export default MovieCard;
