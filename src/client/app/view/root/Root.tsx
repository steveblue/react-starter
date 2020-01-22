import React, { useState } from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { FormattedMessage } from "react-intl";

import "./root.css";
import logo from "./../../../asset/react-icon.svg";

interface RootState {
  animate: boolean;
}

export default class Root extends React.Component {
  public state: RootState = {
    animate: false
  };
  private componentDidMount() {
    this.setState({ animate: true });
  }
  private render() {
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
