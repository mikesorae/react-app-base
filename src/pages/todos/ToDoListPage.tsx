import React from 'react';
import { mainLayout } from '../../layouts/MainLayout';

const Content = () => (
  <>
    <h2>ToDo List</h2>
    <ul>
      <li>todo item 1</li>
      <li>todo item 2</li>
      <li>todo item 3</li>
    </ul>
  </>
);

export const ToDoListPage = mainLayout(Content);
