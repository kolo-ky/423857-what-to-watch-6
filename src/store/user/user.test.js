// reducer
import {user} from "./user";

// actions
import {requiredAuth, setUser} from "../actions";

describe(`reducer user work correctly`, () => {
  it(`reducer without additional parameters return initial state`, () => {
    expect(user(undefined, {}))
      .toEqual({
        authorizationStatus: false,
        user: {
          name: null,
          avatar: null
        }});
  });

  it(`reducer should return an unauthorized user`, () => {
    const state = {authorizationStatus: false,
      user: {
        name: null,
        avatar: null
      }};

    expect(user(state, requiredAuth(false)))
      .toEqual({
        authorizationStatus: false,
        user: {
          name: null,
          avatar: null
        }});
  });

  it(`reducer should return an authorized user`, () => {
    const state = {
      authorizationStatus: false,
      user: {
        name: null,
        avatar: null
      }};

    expect(user(state, requiredAuth(true)))
      .toEqual({
        authorizationStatus: true,
        user: {
          name: null,
          avatar: null
        }});
  });

  it(`reducer should set user data`, () => {
    const state = {
      authorizationStatus: true,
      user: {
        name: null,
        avatar: null
      }};

    const userData = {
      "name": `user@email.ru`,
      'avatar_url': `https/users-avatar/avatar`,
    };

    expect(user(state, setUser(userData)))
      .toEqual({
        authorizationStatus: true,
        user: {
          name: `user@email.ru`,
          avatar: `https/users-avatar/avatar`,
        }});
  });
});
