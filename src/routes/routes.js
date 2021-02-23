export const getRoute = (to, param) => {
  const path = {
    home: `/`,
    login: `/login`,
    mylist: `/mylist`,
    film: `/film/${param}`,
    addReview: `/films/${param}/review`,
    player: `/player/${param}`,
  };

  return path[to];
};

