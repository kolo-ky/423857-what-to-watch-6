import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// components
import VideoPlayer from "../videoplayer/videoplayer";

// types
import filmType from '../../types/film-types';

// routes
import {getRoute} from "../../routes/routes";

const MovieCardListItem = ({film}) => {
  return (
    <article className="small-movie-card catalog__movies-card">
      <VideoPlayer video={film.preview_video_link} poster={film.preview_image} />
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={getRoute(`film`, film.id)}>{film.name}</Link>
      </h3>
    </article>
  );
};

MovieCardListItem.propTypes = {
  film: PropTypes.shape(filmType)
};

export default MovieCardListItem;
