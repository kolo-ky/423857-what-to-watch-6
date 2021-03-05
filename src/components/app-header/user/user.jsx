import React from 'react';
import {Link, useHistory} from "react-router-dom";

// redux
import {useSelector, useDispatch} from 'react-redux';

// routes
import {getRoute} from "../../../routes/routes";

// enhancers
import {logout} from '../../../store/enhancers';

// selectors
import {getAuth, getUser} from "../../../store/user/selectors";

const DEFAULT_AVATAR = `img/avatar.jpg`;

const User = () => {
  const isAuth = useSelector((state) => getAuth(state));
  const user = useSelector((state) => getUser(state));
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();

    dispatch(logout()).then(() => {
      history.push(getRoute(`home`));
    });
  };

  if (isAuth) {
    return (
      <div className="user-block user-auth-block">
        <div className="user-block__avatar user-auth-block__item">
          <img src={user ? user.avatar : DEFAULT_AVATAR} alt="User avatar" width="63" height="63"/>
        </div>
        <Link to={getRoute(`mylist`)} className="user-block__link user-auth-block__item">My List</Link>
        <a href="#" className="user-block__link user-auth-block__item" onClick={(event) => handleClick(event)}>Logout</a>
      </div>
    );
  }

  return (
    <div className="user-block">
      <Link to={getRoute(`login`)} className="user-block__link">Sign in</Link>
    </div>
  );
};

export default User;
