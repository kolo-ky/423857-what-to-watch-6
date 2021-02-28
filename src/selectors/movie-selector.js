export const filmSelector = (state) => (id) => {
  return state.films.find((film) => film.id === Number(id));
};
