import React from 'react';
import {Route, Redirect} from "react-router-dom";
import PropTypes from 'prop-types';

// routes
import {getRoute} from "../../routes/routes";

// redux
import {connect} from 'react-redux';

// selectors
import {getAuth} from "../../store/user/selectors";

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
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

const mapStateToProps = (state) => ({
  isAuth: getAuth(state)
});

export default connect(mapStateToProps)(PrivateRoute);
