import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Page() {
  return (
    <div>
      <h1 className="heading">Page</h1>
      <p>
        <br />
        <Link to="/">Click here</Link> to see another route.
      </p>
    </div>);
}