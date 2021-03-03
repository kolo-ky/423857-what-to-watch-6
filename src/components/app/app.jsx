import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// redux
import {useSelector, useDispatch} from 'react-redux';

// components
import Main from '../screens/main/main';
import Login from '../screens/login/login';
import Film from '../screens/film/film';
import AddOnReview from '../screens/add-on-review/add-on-review';
import MyList from '../screens/my-list/my-list';
import Player from '../screens/player/player';
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

const App = () => {
  const loading = useSelector((state) => isLoading(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth()).then(() => {
      dispatch(getMovies());
    });
  }, [checkAuth]);

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

export default App;
