import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { store } from './redux/Store';
import './App.css';
import {
  TopPage,
  SubPage,
  ToDoListPage,
  LoginPage,
} from './pages';
import { Auth } from './components/Auth';

export const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TopPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/sub" component={SubPage} />
        <Auth>
          <Route path="/todos" component={ToDoListPage} />
        </Auth>
      </Switch>
    </BrowserRouter>
  </Provider>
);
