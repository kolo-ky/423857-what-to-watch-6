import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

// redux
import {useSelector, useDispatch} from 'react-redux';
import {changeGenre} from "../../../store/actions";

// components
import MovieCardList from "../movie-card-list";
import ShowMore from "../../show-more/show-more";

// selector
import {getFilteredFilms, getFilmsCount} from '../../../store/movies/selectors';

const NUMBER_OF_FILMS = 8;

const MovieCardListProxy = ({filmGenre}) => {
  const [count, setCount] = useState(NUMBER_OF_FILMS);
  const filmsCount = useSelector((state) => getFilmsCount(state));
  const dispatch = useDispatch();

  useEffect(() => {
    if (filmGenre) {
      dispatch(changeGenre(filmGenre));
    }
    return () => {
      dispatch(changeGenre(null));
    };
  }, [filmGenre]);

  const films = useSelector((state) => getFilteredFilms(state, count));

  const handleClick = () => {
    setCount((prevState) => prevState + NUMBER_OF_FILMS);
  };

  return (
    <MovieCardList films={films}>
      {filmsCount > count && (
        <ShowMore sendClick={handleClick}/>
      )}
    </MovieCardList>
  );
};

MovieCardListProxy.propTypes = {
  filmGenre: PropTypes.string
};

export default MovieCardListProxy;
