import React from 'react';
import ReactDOM from 'react-dom';

import Reset from './styles/Reset';
import Colors from './styles/settings/colors';
import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <Colors />

    <Routes />
  </React.StrictMode>,
  document.getElementById('root'),
);
