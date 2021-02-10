import React from 'react';
import ReactDOM from 'react-dom';

// mocks
import films from './mocks/films';
import myFilmList from './mocks/my-film-list';

// components
import App from './components/app/app';

const headerMovie = {
  title: `The Grand Budapest Hotel`,
  year: `2014`,
  genre: `Drama`
};

ReactDOM.render(
    <App headerMovie={headerMovie} films={films} myFilmList={myFilmList}/>,
    document.getElementById(`root`)
);
