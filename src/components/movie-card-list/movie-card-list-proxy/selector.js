export const filmsSelector = (state) => ({
  getFilteredFilms: (localState) => {
    if (state.genre) {
      return state.films.filter((film) => film.genre === state.genre).slice(0, localState.to);
    }

    return state.films.slice(0, localState.to);
  },
  getFilmsCount: () => {
    if (state.genre) {
      return state.films.filter((film) => film.genre === state.genre).length;
    }

    return state.films.length;
  }
});
