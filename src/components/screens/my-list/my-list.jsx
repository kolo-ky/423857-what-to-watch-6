import React from 'react';
import PropTypes from 'prop-types';

// components
import MovieCardList from '../../movie-card-list/movie-card-list';
import Footer from '../../footer/footer';
import Loading from "../../loading/loading";
import AppHeader from "../../app-header/app-header";
import User from "../../app-header/user/user";

// redux
import {connect} from 'react-redux';

// types
import filmType from '../../../types/film-type';

const MyList = ({films, isFilmsAvailable, loading}) => {
  if (loading) {
    return <Loading />;
  }

  if (isFilmsAvailable) {
    return (
      <div className="user-page">
        <AppHeader>
          <h1 className="page-title user-page__title">My list</h1>
          <User />
        </AppHeader>

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
