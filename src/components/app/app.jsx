import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

// types
import filmsTypes from '../../types/films-types';

// components
import Main from '../screens/main/main';
import Login from '../screens/login/login';
import Film from '../screens/film/film';
import AddOnReview from '../screens/add-on-review/add-on-review';
import MyList from '../screens/my-list/my-list';
import Player from '../screens/player/Player';
import NotFound from '../screens/not-found/not-found';

const App = (props) => {
  const {films, myFilmList} = props;
  const [posterFilm] = films;


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact
          render={(mainProps) => (
            <Main films={films} posterFilm={posterFilm} {...mainProps}/>
          )}
        />
        <Route path='/login' exact component={Login} />
        <Route path='/mylist' exact
          render={()=>(
            <MyList films={myFilmList} posterFilm={posterFilm} />
          )}
        />
        <Route path='/films/:id' exact
          render={(filmsProps) => (
            <Film films={films} {...filmsProps} />
          )}
        />
        <Route path='/films/:id/review' exact
          render={(reviewProps) => (
            <AddOnReview films={films} {...reviewProps}/>
          )}
        />
        <Route path='/player/:id' exact
          render={(playerProps) => (
            <Player films={films} {...playerProps}/>
          )}
        />
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmsTypes)
  ),
  myFilmList: PropTypes.arrayOf(
      PropTypes.shape(filmsTypes)
  ),
};

export default App;
