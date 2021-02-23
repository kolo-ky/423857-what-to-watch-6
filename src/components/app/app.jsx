import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

// redux
import {connect} from 'react-redux';

// components
import Main from '../screens/main/main';
import Login from '../screens/login/login';
import Film from '../screens/film/film';
import AddOnReview from '../screens/add-on-review/add-on-review';
import MyList from '../screens/my-list/my-list';
import Player from '../screens/player/Player';
import NotFound from '../screens/not-found/not-found';
import ScrollToTop from "../scroll-to-top/scroll-to-top";

// enhancers
import {getMovies} from "../../store/enhancers";

const App = ({loadMovies}) => {

  useEffect(() => {
    loadMovies();
  });

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/mylist' exact component={MyList}/>
        <Route path='/films/:id' exact component={Film}/>
        <Route path='/films/:id/review' exact component={AddOnReview}/>
        <Route path='/player/:id' exact component={Player}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  loadMovies: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadMovies: () => dispatch(getMovies()),
  };
};

export default connect(null, mapDispatchToProps)(App);
