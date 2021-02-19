import React from 'react';
import ReactDOM from 'react-dom';

// store
import {createStore} from "redux";
import {Provider} from 'react-redux';
import reducer from "./store/reducer";

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

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App headerMovie={headerMovie} films={films} myFilmList={myFilmList}/>
    </Provider>,
    document.getElementById(`root`)
);
