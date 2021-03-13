// reducer
import {movies} from "./movies";

// actions
import {changeGenre, toggleLoading, setMovies, setPromo, setFavoriteMovie} from "../actions";

const films = [{
  "id": 1,
  "name": `The Grand Budapest Hotel`,
  "poster_image": `img/the-grand-budapest-hotel-poster.jpg`,
  "preview_image": `img/the-grand-budapest-hotel.jpg`,
  "background_image": `img/the-grand-budapest-hotel-bg.jpg`,
  "background_color": `#ffffff`,
  "video_link": `https://some-link`,
  "preview_video_link": `https://some-link`,
  "description": `In the 1930s, the Grand Budapest Hotel is a popular European ski resort`,
  "rating": 8.9,
  "scores_count": 240,
  "director": `Wes Andreson`,
  "starring": [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  "run_time": 99,
  "genre": `Comedy`,
  "released": 2014,
  "is_favorite": false
}];

describe(`reducer movie work correctly`, () => {
  it(`reducer without additional parameters return initial state`, () => {
    expect(movies(undefined, {}))
      .toEqual({
        genre: null,
        films: [],
        promo: {},
        loading: true
      });
  });

  it(`reducer gotta change the genre of the movie`, () => {
    const state = {
      genre: null,
      films: [],
      promo: {},
      loading: false,
    };

    expect(movies(state, changeGenre(`Crime`))).toEqual({
      genre: `Crime`,
      films: [],
      promo: {},
      loading: false,
    });
  });

  it(`reducer should change the sign of loading ti true`, () => {
    const state = {
      genre: null,
      films: [],
      promo: {},
      loading: false,
    };

    expect(movies(state, toggleLoading())).toEqual({
      genre: null,
      films: [],
      promo: {},
      loading: true,
    });
  });

  it(`reducer should change the sign of loading ti false`, () => {
    const state = {
      genre: null,
      films: [],
      promo: {},
      loading: true,
    };

    expect(movies(state, toggleLoading())).toEqual({
      genre: null,
      films: [],
      promo: {},
      loading: false,
    });
  });

  it(`reducer gotta get movies`, () => {
    const state = {
      genre: null,
      films: [],
      promo: {},
      loading: false,
    };

    expect(movies(state, setMovies(films))).toEqual({
      genre: null,
      films,
      promo: {},
      loading: false,
    });
  });

  it(`reducer gotta get promo movie`, () => {
    const state = {
      genre: null,
      films,
      promo: {},
      loading: false,
    };

    expect(movies(state, setPromo({...films}))).toEqual({
      genre: null,
      films,
      promo: {...films},
      loading: false,
    });
  });

  it(`reducer gotta set favorite movie`, () => {
    const state = {
      genre: null,
      films,
      promo: {...films},
      loading: false,
    };

    const withFavoriteMovie = [{
      "id": 1,
      "name": `The Grand Budapest Hotel`,
      "poster_image": `img/the-grand-budapest-hotel-poster.jpg`,
      "preview_image": `img/the-grand-budapest-hotel.jpg`,
      "background_image": `img/the-grand-budapest-hotel-bg.jpg`,
      "background_color": `#ffffff`,
      "video_link": `https://some-link`,
      "preview_video_link": `https://some-link`,
      "description": `In the 1930s, the Grand Budapest Hotel is a popular European ski resort`,
      "rating": 8.9,
      "scores_count": 240,
      "director": `Wes Andreson`,
      "starring": [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
      "run_time": 99,
      "genre": `Comedy`,
      "released": 2014,
      "is_favorite": true
    }];

    expect(movies(state, setFavoriteMovie({id: 1}))).toEqual({
      genre: null,
      films: withFavoriteMovie,
      promo: {...films},
      loading: false,
    });
  });
});
