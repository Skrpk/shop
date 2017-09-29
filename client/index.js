import React from 'react';
import { render } from 'react-dom';
import { Provider, browserHistory } from 'react-redux';
import { Router } from 'react-router';

import routes from './routes';

render(
  <Provider>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app'));
