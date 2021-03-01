import React from 'react';
import PropTypes from "prop-types";
import {Link, Redirect, useParams} from "react-router-dom";

// redux
import {connect} from "react-redux";

// selector
import {filmSelector} from "../../../selectors/movie-selector";

// components
import AddReviewForm from '../../forms/add-review-form/add-review-form';
import AppHeader from "../../app-header/app-header";
import User from "../../app-header/user/user";

// routes
import {getRoute} from "../../../routes/routes";

const AddOnReview = ({getFilm}) => {
  const {id} = useParams();
  const film = getFilm(id);

  if (!film) {
    return (
      <Redirect to={getRoute(`notFound`)}/>
    );
  }

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={film.background_image} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <AppHeader>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={getRoute(`film`, film.id)} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <User />
        </AppHeader>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={film.background_image} alt={film.name} width="218"
            height="327"/>
        </div>
      </div>

      <AddReviewForm id={film.id}/>
    </section>
  );
};

AddOnReview.propTypes = {
  getFilm: PropTypes.func
};

const mapStateToProps = ({MOVIES}) => ({
  getFilm: filmSelector(MOVIES)
});

const addOnReviewConnected = connect(mapStateToProps)(AddOnReview);

export default addOnReviewConnected;
