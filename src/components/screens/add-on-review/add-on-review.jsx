import React from 'react';
import PropTypes from "prop-types";
import {Link, useParams} from "react-router-dom";

// types
import filmType from "../../../types/film-type";

// components
import AddReviewForm from '../../forms/add-review-form/add-review-form';

// routes
import {getRoute} from "../../../routes/routes";

const AddOnReview = ({films}) => {
  const {id} = useParams();
  const film = films.find((item) => item.id === Number(id));

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to={getRoute(`home`)} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={getRoute(`film`, film.id)} className="breadcrumbs__link">{film.title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt={film.title} width="218"
            height="327"/>
        </div>
      </div>

      <AddReviewForm id={film.id}/>

    </section>
  );
};

AddOnReview.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmType)
  ),
};

export default AddOnReview;
