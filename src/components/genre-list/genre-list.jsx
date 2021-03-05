import React, {Fragment} from 'react';

// redux
import {useSelector, useDispatch} from "react-redux";

// store
import {changeGenre} from "../../store/actions";
import {getGenre} from "../../store/movies/selectors";

// genres
import genres from "./genres";

const GenreList = () => {
  const genre = useSelector((state) => getGenre(state));
  const dispatch = useDispatch();

  const handleClick = (value, event) => {
    event.preventDefault();
    dispatch(changeGenre(value));
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

export default GenreList;
