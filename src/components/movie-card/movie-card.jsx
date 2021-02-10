import React from 'react';
import PropTypes from "prop-types";
import {useHistory} from 'react-router-dom';

// types
import filmType from '../../types/film-types';

// components
import AppHeader from '../app-header/app-header';

const MovieCard = ({film}) => {
  const history = useHistory();

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt={film.title}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <AppHeader />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt={film.title} width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{film.title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{film.genre}</span>
              <span className="movie-card__year">{film.year}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button" onClick={() => history.push(`/player/${film.id}`)}>
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
  film: PropTypes.shape(filmType)
};

export default MovieCard;
