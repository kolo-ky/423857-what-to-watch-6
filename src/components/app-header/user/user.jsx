import React from 'react';
import PropTypes from 'prop-types';
import {Link, useHistory} from "react-router-dom";

// redux
import {connect} from 'react-redux';

// routes
import {getRoute} from "../../../routes/routes";

// enhancers
import {logout} from '../../../store/enhancers';

const DEFAULT_AVATAR = `img/avatar.jpg`;

const User = ({isAuth, user, setLogout}) => {
  const history = useHistory();
  const handleClick = (event) => {
    event.preventDefault();

    setLogout().then(() => {
      history.push(getRoute(`home`));
    });
  };

  if (isAuth) {
    return (
      <div className="user-block">
        <div className="user-block__avatar">
          <img src={user ? user.avatar : DEFAULT_AVATAR} alt="User avatar" width="63" height="63"/>
        </div>

        <a href="#" className="user-block__link" onClick={(event) => handleClick(event)}>Logout</a>
      </div>
    );
  }

  return (
    <div className="user-block">
      <Link to={getRoute(`login`)} className="user-block__link">Sign in</Link>
    </div>
  );
};

User.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  setLogout: PropTypes.func,
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string
  })
};

const mapStateToProps = (state) => ({
  isAuth: state.authorizationStatus,
  user: state.user
});

const mapDispatchToProps = (dispatch) => {
  return {
    setLogout: () => dispatch(logout({email: null, avatar: null}))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
