export const filmsSelector = (state) => ({
  getFilteredFilms: (filmGenre, localState) => {
    if (filmGenre) {
      return state.films.filter((film) => film.genre === filmGenre).slice(0, localState.to);
    }

    if (state.genre) {
      return state.films.filter((film) => film.genre === state.genre).slice(0, localState.to);
    }

    return state.films.slice(0, localState.to);
  },
  getFilmsCount: (filmGenre) => {
    if (filmGenre) {
      return state.films.filter((film) => film.genre === filmGenre).length;
    }

    if (state.genre) {
      return state.films.filter((film) => film.genre === state.genre).length;
    }

    return state.films.length;
  }
});
