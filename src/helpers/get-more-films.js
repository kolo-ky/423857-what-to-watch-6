const getMoreFilms = (films, genre) => {
  return films.filter((item) => item.genre === genre);
};

export default getMoreFilms;
