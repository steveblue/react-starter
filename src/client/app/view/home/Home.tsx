import React, { useState } from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { FormattedMessage } from "react-intl";

import "./home.scss";
import logo from "./../../../asset/react-icon.svg";

interface IHomeState {
  animate: boolean;
}

export default class Home extends React.Component {
  public state: IHomeState = {
    animate: false
  };
  public componentDidMount(): void {
    this.setState({ animate: true });
  }
  public render(): JSX.Element {
    return (
      <div className="home">
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
