import React from 'react';
import importComponent from 'react-imported-component';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './view/Root';
import LoadingComponent from './view/Loading'
import ErrorComponent from './view/Error'

const Page = importComponent(() => import('./view/page/Page'), {
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