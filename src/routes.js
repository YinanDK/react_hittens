import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './component/App';
import CardPage from './component/picture/CardPage';
import ManageCardPage from './component/picture/ManageCardPage';

export default (
  <Route  path="/" component={App}>
    < IndexRoute  component={CardPage} />
    <Route  path="/:id" component = {ManageCardPage} />
  </Route>
);
