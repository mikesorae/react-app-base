import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { store } from './redux/Store';
import './App.css';
import { TopPage, SubPage, ToDoListPage } from './pages';

export const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={TopPage} />
        <Route path="/sub" component={SubPage} />
        <Route path="/todos" component={ToDoListPage} />
      </div>
    </BrowserRouter>
  </Provider>
);
