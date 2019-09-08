import React from 'react';
import { mainLayout } from '../layouts/MainLayout';

const Content = () => (
  <p>Hello React App</p>
);

export const TopPage = mainLayout(Content);
