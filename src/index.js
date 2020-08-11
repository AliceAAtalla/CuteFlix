import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Reset from './styles/Reset';
import App from './App';
import Video from './pages/Video';
import Colors from './styles/settings/colors';

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <Colors />

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/video/new" component={Video} />
        {/* <Route path="" component={}/> */}
        {/* <Route component={NotFound}/> */}
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
