import * as React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import './page.scss';

export default function Page() {
  return (
    <React.Fragment>
      <Helmet>
        <title>About Page</title>
      </Helmet>
      <div className="page">
        <h1 className="heading">Page</h1>
        <p>
          <br />
          <Link to="/">Click here</Link> to see another route.
        </p>
      </div>
    </React.Fragment>);
}