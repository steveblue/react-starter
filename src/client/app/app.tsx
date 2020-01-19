import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import importComponent from 'react-imported-component';
import Home from './view/root';
import LoadingComponent from './view/loading'
import ErrorComponent from './view/error'

const Page = importComponent(() => import('./view/page/page'), {
  LoadingComponent,
  ErrorComponent
});

const App = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/page" render={() => <Page />} />
      <Redirect to="/" />
    </Switch>
  </React.Fragment>
)
export default App