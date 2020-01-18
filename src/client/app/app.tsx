import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Root from './view/root';
import Page from './view/page';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Root} />
        <Route exact path="/page" component={Page} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}