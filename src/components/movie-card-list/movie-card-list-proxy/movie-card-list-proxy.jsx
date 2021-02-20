import React, {useEffect, useReducer} from 'react';
import PropTypes from 'prop-types';

// redux
import {connect} from 'react-redux';
import {CHANGE_GENRE} from "../../../store/action";

// components
import MovieCardList from "../movie-card-list";
import ShowMore from "../../show-more/show-more";

// proxy reducer
import proxyReducer from "./reducer";

// selector
import {filmsSelector} from './selector';

const MovieCardListProxy = ({filmGenre, getFilmsCount, changeGenre, getFilteredFilms}) => {
  const {reducer, initialState, ActionType} = proxyReducer;
  const [localState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (filmGenre) {
      changeGenre(filmGenre);
    }
    return () => {
      changeGenre(null);
    };
  }, [filmGenre]);

  const films = getFilteredFilms(localState);
  const filmsCount = getFilmsCount();

  const handleClick = () => {
    dispatch({type: ActionType.SHOW_MORE});
  };

  return (
    <MovieCardList films={films}>
      {
        filmsCount > localState.to
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
    changeGenre: (genre) => dispatch({type: CHANGE_GENRE, payload: genre}),
  };
};

MovieCardListProxy.propTypes = {
  filmGenre: PropTypes.string,
  getFilmsCount: PropTypes.func,
  changeGenre: PropTypes.func,
  getFilteredFilms: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardListProxy);
