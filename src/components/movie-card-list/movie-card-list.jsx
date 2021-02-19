import React, {useState} from 'react';
import PropTypes from 'prop-types';

// components
import MovieCardListItem from "../movie-card-list-item/movie-card-list-item";
import filmType from "../../types/film-types";

const MovieCardList = ({films}) => {
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
  );
};

MovieCardList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmType)
  ),
};

export default MovieCardList;
