import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

// components
import MovieCardList from '../../movie-card-list/movie-card-list';
import Footer from '../../footer/footer';
import Loading from "../../loading/loading";

// redux
import {connect} from 'react-redux';

// types
import filmType from '../../../types/film-type';

// getRoute
import {getRoute} from '../../../routes/routes';

const MyList = ({films, isFilmsAvailable, loading}) => {
  if (loading) {
    return <Loading />;
  }

  if (isFilmsAvailable) {
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

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </div>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <MovieCardList films={films} />
        </section>
        <Footer />
      </div>
    );
  }

  return null;
};

MyList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmType)
  ),
  loading: PropTypes.bool,
  isFilmsAvailable: PropTypes.bool
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  isFilmsAvailable: state.films.length > 0,
  films: state.films.filter((film) => film.is_favorite)
});

export default connect(mapStateToProps)(MyList);
