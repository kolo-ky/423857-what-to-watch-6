import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({title, img}) => {
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={img} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default MovieCard;
