import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";

// store
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import {rootReducer} from "./store/root-reducer";

// components
import App from './components/app/app';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`root`)
);
