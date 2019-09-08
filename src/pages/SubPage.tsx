import React from 'react';
import { mainLayout } from '../layouts/MainLayout';

const Content = () => (
  <p>Sub Page</p>
);

export const SubPage = mainLayout(Content);
