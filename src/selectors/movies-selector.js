export const getFilteredFilms = ({MOVIES}) => (count) => {
  if (MOVIES.genre) {
    return MOVIES.films.filter((film) => film.genre === MOVIES.genre).slice(0, count);
  }

  return MOVIES.films.slice(0, count);
};

export const getFilmsCount = ({MOVIES}) => {
  if (MOVIES.genre) {
    return MOVIES.films.filter((film) => film.genre === MOVIES.genre).length;
  }

  return MOVIES.films.length;
};
