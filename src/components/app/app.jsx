import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

// types
import filmType from '../../types/film-types';

// components
import Main from '../screens/main/main';
import Login from '../screens/login/login';
import Film from '../screens/film/film';
import AddOnReview from '../screens/add-on-review/add-on-review';
import MyList from '../screens/my-list/my-list';
import Player from '../screens/player/Player';
import NotFound from '../screens/not-found/not-found';
import ScrollToTop from "../scroll-to-top/scroll-to-top";

const App = (props) => {
  const {films, myFilmList} = props;
  const [posterFilm] = films;

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact
          render={() => (
            <Main films={films} posterFilm={posterFilm}/>
          )}
        />
        <Route path='/login' exact component={Login} />
        <Route path='/mylist' exact
          render={()=>(
            <MyList films={myFilmList} posterFilm={posterFilm} />
          )}
        />
        <Route path='/films/:id' exact
          render={() => (
            <Film films={films}/>
          )}
        />
        <Route path='/films/:id/review' exact
          render={() => (
            <AddOnReview films={films}/>
          )}
        />
        <Route path='/player/:id' exact
          render={() => (
            <Player films={films}/>
          )}
        />
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmType)
  ),
  myFilmList: PropTypes.arrayOf(
      PropTypes.shape(filmType)
  ),
};

export default App;
