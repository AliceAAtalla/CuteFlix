import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/settings/colors.css';
import './styles/reset.css';
import App from './App';
import Video from './pages/Video';

ReactDOM.render(
  <React.StrictMode>
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
