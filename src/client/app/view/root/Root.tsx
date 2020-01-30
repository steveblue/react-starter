import React, { useState } from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { FormattedMessage } from "react-intl";

import "./root.scss";
import logo from "./../../../asset/react-icon.svg";

interface IRootState {
  animate: boolean;
}

export default class Root extends React.Component {
  public state: IRootState = {
    animate: false
  };
  public componentDidMount(): void {
    this.setState({ animate: true });
  }
  public render(): JSX.Element {
    return (
      <div className="root">
        <Helmet>
          <title>Home Page</title>
        </Helmet>
        <CSSTransition in={this.state.animate} timeout={500} classNames="logo">
          <div className="logo is--center">
            <Link to="/page">
              <img src={logo} />
              <p>
                <FormattedMessage
                  id="home.welcome"
                  values={{ name: <i>React</i> }}
                />
              </p>
            </Link>
          </div>
        </CSSTransition>
      </div>
    );
  }
}
