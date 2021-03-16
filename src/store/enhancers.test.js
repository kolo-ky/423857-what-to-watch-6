import MockAdapter from "axios-mock-adapter";

// api
import {createApi} from "../axios/axios";

// actions
import {checkAuth} from "./enhancers";
import {REQUIRED_AUTH} from "./actions";

// routes
import {getRoute} from "../routes/routes";

const api = createApi(() => {});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(getRoute(`login`))
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {})
      .then(() => {
        console.log(dispatch);
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith(1, {
          type: REQUIRED_AUTH,
          payload: true
        });
      });
  });
});
