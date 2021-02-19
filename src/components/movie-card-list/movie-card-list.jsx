import React, {useState} from 'react';
import PropTypes from 'prop-types';

// redux
import {connect} from 'react-redux';

// components
import MovieCardListItem from "../movie-card-list-item/movie-card-list-item";

const MovieCardList = ({getFilteredFilms}) => {
  // eslint-disable-next-line no-unused-vars
  const [activeMovie, setActiveMovie] = useState({
    movieId: 0
  });

  const handleEvent = (movieId) => {
    setActiveMovie({
      movieId
    });
  };

  const filteredFilms = getFilteredFilms();

  return (
    <div className="catalog__movies-list" >
      {filteredFilms.map((item) => (
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

const mapStateToProps = (state) => ({
  getFilteredFilms: () => {
    if (state.genre) {
      return state.films.filter((film) => film.genre === state.genre);
    }

    return state.films;
  },
});

MovieCardList.propTypes = {
  getFilteredFilms: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(MovieCardList);
