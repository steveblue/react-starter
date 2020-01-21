import * as React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import './page.css';

export default function Page() {
  const title: string = 'Page';
  return (
    <div>
      <Helmet>
        <title>About Page</title>
      </Helmet>
      <div className='page'>
        <h1 className='heading'>{title}</h1>
        <p>
          <br />
          <Link to='/'>Click here</Link> to see another route.
        </p>
      </div>
    </div>
    );
}