import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// components
import MovieCardList from '../../movie-card-list/movie-card-list';
import Footer from '../../footer/footer';
import User from "../../app-header/user/user";

// redux
import {connect} from 'react-redux';

// selectors
import {getFavoriteFilms} from "../../../store/movies/selectors";

// types
import filmType from '../../../types/film-type';

// routes
import {getRoute} from "../../../routes/routes";

const MyList = ({films}) => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={getRoute(`home`)} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <User />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        {films.length > 0 ? <MovieCardList films={films} /> : <p>Your movie list is empty.</p>}
      </section>
      <Footer />
    </div>
  );
};

MyList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmType)
  )
};

const mapStateToProps = (state) => ({
  films: getFavoriteFilms(state)
});

export default connect(mapStateToProps)(MyList);
