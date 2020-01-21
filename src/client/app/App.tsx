import React from "react";
import importComponent from "react-imported-component";
import { Redirect, Route, Switch } from "react-router-dom";

import ErrorComponent from "./view/Error";
import LoadingComponent from "./view/Loading";
import Home from "./view/Root";

const Page = importComponent(() => import("./view/page/Page"), {
  ErrorComponent,
  LoadingComponent
});

const RenderPage = () => <Page />;

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/page" render={RenderPage} />
    <Redirect to="/" />
  </Switch>
);
export default App;
