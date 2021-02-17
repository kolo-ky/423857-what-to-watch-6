import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// components
import VideoPlayer from "../videoplayer/videoplayer";

// eslint-disable-next-line no-unused-vars
const MovieCardListItem = ({id, title, img, video, onMouseEvent}) => {
  return (
    <article className="small-movie-card catalog__movies-card">
      <VideoPlayer video={video} poster={img} />
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
  video: PropTypes.string.isRequired,
  onMouseEvent: PropTypes.func
};

export default MovieCardListItem;
