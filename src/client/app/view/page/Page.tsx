import React, { useState } from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { FormattedMessage } from "react-intl";

import "./page.css";
import logo from "./../../../asset/react-icon.svg";

interface PageState {
  animate: boolean;
}

export default class Page extends React.Component {
  public title: string = "Page";
  public state: PageState = {
    animate: false
  };
  private componentDidMount() {
    this.setState({ animate: true });
  }
  private render() {
    return (
      <div className="page">
        <Helmet>
          <title>Page</title>
        </Helmet>
        <CSSTransition in={this.state.animate} timeout={500} classNames="logo">
          <div className="logo is--center">
            <Link to="/">
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
