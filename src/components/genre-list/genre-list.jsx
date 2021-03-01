import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

// redux
import {connect} from "react-redux";

// store
import {changeGenreAction} from "../../store/action";
import {getGenre} from "../../store/movies/selectors";

// genres
import genres from "./genres";

const GenreList = ({genre, changeGenre}) => {
  const handleClick = (value, event) => {
    event.preventDefault();
    changeGenre(value);
  };

  return (
    <Fragment>
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        {genres.map((item) => (
          <li
            className={`catalog__genres-item ${genre === item.value && `catalog__genres-item--active`}`}
            key={`$key-genre-${item.title}`}
          >
            <a
              href="#"
              className="catalog__genres-link"
              onClick={handleClick.bind(undefined, item.value)}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

GenreList.propTypes = {
  genre: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
  changeGenre: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  genre: getGenre(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeGenre: (value) => dispatch(changeGenreAction(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
