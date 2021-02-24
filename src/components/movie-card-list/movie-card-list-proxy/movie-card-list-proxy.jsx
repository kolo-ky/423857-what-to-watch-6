import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

// redux
import {connect} from 'react-redux';
import {changeGenreAction} from "../../../store/action";

// components
import MovieCardList from "../movie-card-list";
import ShowMore from "../../show-more/show-more";

// selector
import {filmsSelector} from './selector';

const NUMBER_OF_FILMS = 8;

const MovieCardListProxy = ({filmGenre, getFilmsCount, changeGenre, getFilteredFilms}) => {
  const [count, setCount] = useState(NUMBER_OF_FILMS);

  useEffect(() => {
    if (filmGenre) {
      changeGenre(filmGenre);
    }
    return () => {
      changeGenre(null);
    };
  }, [filmGenre]);

  const films = getFilteredFilms(count);
  const filmsCount = getFilmsCount();

  const handleClick = () => {
    setCount((prevState) => prevState + NUMBER_OF_FILMS);
  };

  return (
    <MovieCardList films={films}>
      {
        filmsCount > count
          ?
          <ShowMore sendClick={handleClick}/>
          :
          null
      }
    </MovieCardList>
  );
};

const mapStateToProps = filmsSelector;

const mapDispatchToProps = (dispatch) => {
  return {
    changeGenre: (genre) => dispatch(changeGenreAction(genre)),
  };
};

MovieCardListProxy.propTypes = {
  filmGenre: PropTypes.string,
  getFilmsCount: PropTypes.func,
  changeGenre: PropTypes.func,
  getFilteredFilms: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardListProxy);
