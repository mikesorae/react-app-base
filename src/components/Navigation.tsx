import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => (
  <ul>
    <li>
      <Link to="/">Go to Home</Link>
    </li>
    <li>
      <Link to="/sub">Go to Sub</Link>
    </li>
    <li>
      <Link to="/todos">Go to TODO</Link>
    </li>
  </ul>
);
