import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import PropsTypes from 'prop-types';

// redux
import {connect} from 'react-redux';

// enhancers
import {login} from "../../../store/enhancers";

// components
import Footer from '../../footer/footer';
import AppHeader from "../../app-header/app-header";

// routes
import {getRoute} from "../../../routes/routes";

const Login = ({setLogin}) => {
  const history = useHistory();

  const [userInfo, setUserInfo] = useState({
    email: ``,
    password: ``
  });

  const handleChange = (event) => {
    event.persist();
    setUserInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setLogin(userInfo).then(() => {
      history.push(getRoute(`home`));
    });
  };

  return (
    <div className="user-page">
      <AppHeader />

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="email"
                id="user-email"
                value={userInfo[`user-email`]}
                onChange={handleChange}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="password"
                id="user-password"
                value={userInfo[`password`]}
                onChange={handleChange}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer/>
    </div>
  );
};

Login.propTypes = {
  setLogin: PropsTypes.func
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: (user) => dispatch(login(user))
  };
};

export default connect(null, mapDispatchToProps)(Login);
