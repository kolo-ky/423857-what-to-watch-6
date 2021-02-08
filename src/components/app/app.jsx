import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// components
import Main from '../screens/main/main';
import Login from '../screens/login/login';
import Film from '../screens/film/film';
import AddOnReview from '../screens/add-on-review/add-on-review';
import MyList from '../screens/my-list/my-list';
import Player from '../screens/player/Player';
import NotFound from '../screens/not-found/not-found';

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact
          render={() => (
            <Main {...props}/>
          )}
        />
        <Route path='/login' exact component={Login} />
        <Route path='/mylist' exact component={MyList} />
        <Route path='/films/:id' exact component={Film} />
        <Route path='/films/:id/review' exact component={AddOnReview} />
        <Route path='/player/:id' exact component={Player} />
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
