// actions
import {
  changeGenre,
  toggleLoading,
  setMovies,
  setPromo,
  requiredAuth,
  setUser,
  setFavoriteMovie
} from './actions';

// actions types
import {CHANGE_GENRE, TOGGLE_LOADING, SET_MOVIES, SET_PROMO, REQUIRED_AUTH, SET_USER, SET_FAVORITE_MOVIE} from './actions';

const films = [{
  "id": 1,
  "name": `The Grand Budapest Hotel`,
  "poster_image": `img/the-grand-budapest-hotel-poster.jpg`,
  "preview_image": `img/the-grand-budapest-hotel.jpg`,
  "background_image": `img/the-grand-budapest-hotel-bg.jpg`,
  "background_color": `#ffffff`,
  "video_link": `https://some-link`,
  "preview_video_link": `https://some-link`,
  "description": `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  "rating": 8.9,
  "scores_count": 240,
  "director": `Wes Andreson`,
  "starring": [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  "run_time": 99,
  "genre": `Comedy`,
  "released": 2014,
  "is_favorite": false
}];

// test group
describe(`Actions creators work correctly`, () => {

  it(`Actions creator for change film genre`, () => {
    const expectedAction = {
      type: CHANGE_GENRE,
      payload: `Crime`
    };

    expect(changeGenre(`Crime`)).toEqual(expectedAction);
  });

  it(`Actions creator for toggle loading`, () => {
    const expectedAction = {
      type: TOGGLE_LOADING
    };

    expect(toggleLoading()).toEqual(expectedAction);
  });

  it(`Actions creator for set films`, () => {
    const expectedAction = {
      type: SET_MOVIES,
      payload: films
    };

    expect(setMovies(films)).toEqual(expectedAction);
  });

  it(`Actions creator for set promo films`, () => {
    const expectedAction = {
      type: SET_PROMO,
      payload: {...films}
    };

    expect(setPromo({...films})).toEqual(expectedAction);
  });

  it(`Actions creator for required auth / user is not logged in`, () => {
    const expectedAction = {
      type: REQUIRED_AUTH,
      payload: false
    };

    expect(requiredAuth(false)).toEqual(expectedAction);
  });

  it(`Actions creator for required auth / user is logged in`, () => {
    const expectedAction = {
      type: REQUIRED_AUTH,
      payload: true
    };

    expect(requiredAuth(true)).toEqual(expectedAction);
  });

  it(`Actions creator for set user`, () => {
    const expectedAction = {
      type: SET_USER,
      payload: {
        email: `user@mail.ru`,
        avatar: `https/users-avatar/avatar`
      }
    };

    const user = {
      email: `user@mail.ru`,
      avatar: `https/users-avatar/avatar`
    };

    expect(setUser(user)).toEqual(expectedAction);
  });

  it(`Actions creator for set favorite film`, () => {
    const expectedAction = {
      type: SET_FAVORITE_MOVIE,
      payload: {...films}
    };

    expect(setFavoriteMovie({...films})).toEqual(expectedAction);
  });
});
