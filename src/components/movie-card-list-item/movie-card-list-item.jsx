import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const MovieCardListItem = ({id, title, img, onEnter}) => {
  const handlerMouseEnter = () => {
    onEnter(id);
  };

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={handlerMouseEnter}>
      <div className="small-movie-card__image">
        <img src={img} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{title}</Link>
      </h3>
    </article>
  );
};

MovieCardListItem.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onEnter: PropTypes.func
};

export default MovieCardListItem;
