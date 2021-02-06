import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// components
import Main from './pages/Main';
import Login from './pages/Login';
import Film from './pages/Film';
import AddReview from './pages/AddReview';
import MyList from './pages/MyList';
import Player from './pages/Player';
import NotFound from './pages/NotFound';

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
        <Route path='/films/:id/review' exact component={AddReview} />
        <Route path='/player/:id' exact component={Player} />
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
