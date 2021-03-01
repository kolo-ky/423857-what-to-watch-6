export const filmSelector = (MOVIES) => (id) => {
  return MOVIES.films.find((film) => film.id === Number(id));
};
