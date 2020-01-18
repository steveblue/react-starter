import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Root() {
  return (
    <div>
      <h1 className="heading">Root</h1>
      <p>
        <br />
        <Link to="/page">Click here</Link> to see another route.
      </p>
    </div>);
}