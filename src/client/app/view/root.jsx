import * as React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Root() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div>
        <h1 className="heading">Home</h1>
        <p>
          <br />
          <Link to="/page">Click here</Link> to see another route.
        </p>
      </div>
    </React.Fragment>);
}