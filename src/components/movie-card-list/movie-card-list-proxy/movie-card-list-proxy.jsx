import React, {useReducer} from 'react';
import PropTypes from 'prop-types';

// redux
import {connect} from 'react-redux';

// component
import MovieCardList from "../movie-card-list";
import ShowMore from "../../show-more/show-more";

// proxy reducer
import proxyReducer from "./reducer";

// selector
import {filmsSelector} from './selector';

const MovieCardListProxy = ({filmGenre, getFilmsCount, getFilteredFilms}) => {
  const {reducer, initialState, ActionType} = proxyReducer;
  const [localState, dispatch] = useReducer(reducer, initialState);

  const films = getFilteredFilms(filmGenre, localState);
  const filmsCount = getFilmsCount(filmGenre);

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

MovieCardListProxy.propTypes = {
  filmGenre: PropTypes.string,
  getFilmsCount: PropTypes.func,
  getFilteredFilms: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(MovieCardListProxy);
