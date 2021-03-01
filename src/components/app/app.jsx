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
import Loading from "../loading/loading";

// private route
import PrivateRoute from "../private-route/private-route";

// enhancers
import {getMovies, checkAuth} from "../../store/enhancers";

// routes
import {getRoute} from "../../routes/routes";

// selectors
import {isLoading} from "../../store/movies/selectors";

const App = ({loadMovies, loading, getAuth}) => {

  useEffect(() => {
    getAuth().then(() => {
      loadMovies();
    });
  }, [getAuth]);

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path={getRoute(`home`)} exact component={Main}/>
        <Route path={getRoute(`login`)} exact component={Login}/>
        <PrivateRoute path={getRoute(`mylist`)} exact component={MyList}/>
        <Route path={getRoute(`film`, `:id`)} exact component={Film}/>
        <PrivateRoute path={getRoute(`addReview`, `:id`)} exact component={AddOnReview}/>
        <PrivateRoute path={getRoute(`player`, `:id`)} exact component={Player}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  loadMovies: PropTypes.func.isRequired,
  getAuth: PropTypes.func.isRequired,
  loading: PropTypes.bool
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadMovies: () => dispatch(getMovies()),
    getAuth: () => dispatch(checkAuth()),
  };
};

const mapStateToProps = (state) => ({
  loading: isLoading(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
