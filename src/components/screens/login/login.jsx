import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

// redux
import {useDispatch} from 'react-redux';

// enhancers
import {login} from "../../../store/enhancers";

// components
import Footer from '../../footer/footer';
import AppHeader from "../../app-header/app-header";

// routes
import {getRoute} from "../../../routes/routes";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

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

    dispatch(login(userInfo)).then(() => {
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

export default Login;
