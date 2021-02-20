import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';

// components
import MovieCardListItem from "../movie-card-list-item/movie-card-list-item";
import filmType from "../../types/film-types";

const MovieCardList = ({films, children}) => {
  // eslint-disable-next-line no-unused-vars
  const [activeMovie, setActiveMovie] = useState({
    movieId: 0
  });

  const handleEvent = (movieId) => {
    setActiveMovie({
      movieId
    });
  };

  return (
    <Fragment>
      <div className="catalog__movies-list" >
        {films.map((item) => (
          <MovieCardListItem
            key={`$-movie-card-key-${item.id}`}
            id={item.id}
            title={item.title}
            img={item.img}
            video={item.video}
            onMouseEvent={handleEvent}
          />
        ))}
      </div>
      {children}
    </Fragment>
  );
};

MovieCardList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmType)
  ),
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null]).isRequired]),
};

export default MovieCardList;
