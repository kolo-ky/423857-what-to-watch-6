export const getFilteredFilms = (state) => (count) => {
  if (state.genre) {
    return state.films.filter((film) => film.genre === state.genre).slice(0, count);
  }

  return state.films.slice(0, count);
};

export const getFilmsCount = (state) => {
  if (state.genre) {
    return state.films.filter((film) => film.genre === state.genre).length;
  }

  return state.films.length;
};
