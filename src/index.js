import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';

// store
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import {rootReducer} from "./store/root-reducer";

// components
import App from './components/app/app';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`root`)
);
