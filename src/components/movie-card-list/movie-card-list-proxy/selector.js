export const filmsSelector = (state) => ({
  getFilteredFilms: (count) => {
    if (state.genre) {
      return state.films.filter((film) => film.genre === state.genre).slice(0, count);
    }

    return state.films.slice(0, count);
  },
  getFilmsCount: () => {
    if (state.genre) {
      return state.films.filter((film) => film.genre === state.genre).length;
    }

    return state.films.length;
  }
});
