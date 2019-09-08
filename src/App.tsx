import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const Nav = () => (
  <ul>
    <li>
      <Link to="/">Go to Home</Link>
    </li>
    <li>
      <Link to="/sub">Go to Sub</Link>
    </li>
  </ul>
);
const Home = () => (
  <>
    <p>Hello React App</p>
    <Nav />
  </>
);

const Sub = () => (
  <>
    <p>Here is Sub Page</p>
    <Nav />
  </>
);

const App: React.FC = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/sub" component={Sub} />
    </div>
  </BrowserRouter>
);

export default App;
