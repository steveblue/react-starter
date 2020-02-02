import React from "react";
import importComponent from "react-imported-component";
import { Redirect, Route, Switch } from "react-router-dom";

import ErrorComponent from "./view/Error";
import LoadingComponent from "./view/Loading";

const Home = importComponent(() => import("./view/home/Home"), {
  ErrorComponent,
  LoadingComponent
});

const Page = importComponent(() => import("./view/page/Page"), {
  ErrorComponent,
  LoadingComponent
});

const App = () => (
  <Switch>
    <Route exact={true} path="/" render={() => <Home />} />
    <Route exact={true} path="/page" render={() => <Page />} />
    <Redirect to="/" />
  </Switch>
);
export default App;
