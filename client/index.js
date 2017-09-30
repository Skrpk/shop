import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import routes from './routes';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(
  rootReducer,
  middleware,
);

sagaMiddleware.run(sagas);

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('app'));
