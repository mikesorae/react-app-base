import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { TopPage, SubPage } from './pages';

export const App: React.FC = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={TopPage} />
      <Route path="/sub" component={SubPage} />
    </div>
  </BrowserRouter>
);
