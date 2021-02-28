import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

// redux
import {connect} from 'react-redux';
import {changeGenreAction} from "../../../store/action";

// components
import MovieCardList from "../movie-card-list";
import ShowMore from "../../show-more/show-more";

// selector
import {getFilteredFilms, getFilmsCount} from '../../../selectors/movies-selector';

const NUMBER_OF_FILMS = 8;

const MovieCardListProxy = ({filmGenre, filmsCount, changeGenre, getFilms}) => {
  const [count, setCount] = useState(NUMBER_OF_FILMS);

  useEffect(() => {
    if (filmGenre) {
      changeGenre(filmGenre);
    }
    return () => {
      changeGenre(null);
    };
  }, [filmGenre]);

  const films = getFilms(count);

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

const mapStateToProps = (state) => ({
  getFilms: getFilteredFilms(state),
  filmsCount: getFilmsCount(state)
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeGenre: (genre) => dispatch(changeGenreAction(genre)),
  };
};

MovieCardListProxy.propTypes = {
  filmGenre: PropTypes.string,
  filmsCount: PropTypes.number,
  changeGenre: PropTypes.func,
  getFilms: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardListProxy);
