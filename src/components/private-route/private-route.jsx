import React from 'react';
import {Route, Redirect} from "react-router-dom";
import PropTypes from 'prop-types';

// routes
import {getRoute} from "../../routes/routes";

// redux
import {connect} from 'react-redux';

const PrivateRoute = ({component: Component, isAuth, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to={getRoute(`login`)} />
      }
    />
  );
};

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool,
  component: PropTypes.func
};

const mapStateToProps = (state) => ({
  isAuth: state.authorizationStatus
});

export default connect(mapStateToProps)(PrivateRoute);
