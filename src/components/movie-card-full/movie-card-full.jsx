import React from "react";
import PropTypes from "prop-types";
import {Link, useHistory} from "react-router-dom";

// redux
import {connect} from 'react-redux';

// selectors
import {getAuth} from "../../store/user/selectors";

// types
import filmType from '../../types/film-type';
import reviewTypes from '../../types/review-types';

// components
import AppHeader from "../app-header/app-header";
import Tabs from "../tabs/tabs";
import User from "../app-header/user/user";

// routes
import {getRoute} from "../../routes/routes";

const MovieCardFull = ({film, isAuth, comments}) => {
  const history = useHistory();

  return (
    <section className="movie-card movie-card--full" style={{background: film.background_color}}>
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={film.background_image} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <AppHeader>
          <User />
        </AppHeader>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{film.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{film.genre}</span>
              <span className="movie-card__year">{film.released}</span>
            </p>
            {isAuth && (
              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => history.push(`/player/${film.id}`)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={getRoute(`addReview`, film.id)} className="btn movie-card__button">Add review</Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={film.poster_image} alt={film.name} width="218"
              height="327"/>
          </div>

          <Tabs film={film} reviews={comments}/>

        </div>
      </div>
    </section>
  );
};

MovieCardFull.propTypes = {
  film: PropTypes.shape(filmType),
  isAuth: PropTypes.bool.isRequired,
  comments: PropTypes.arrayOf(
      PropTypes.shape(reviewTypes)
  )
};

const mapStateToProps = (state) => ({
  isAuth: getAuth(state)
});

export default connect(mapStateToProps)(MovieCardFull);
