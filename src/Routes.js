import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import Video from './pages/Video';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/video/new" component={Video} />
      {/* <Route path="" component={}/> */}
      {/* <Route component={NotFound}/> */}
    </Switch>
  </BrowserRouter>
);

export default Routes;
