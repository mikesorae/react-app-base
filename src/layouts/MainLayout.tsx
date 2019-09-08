import React from 'react';
import { Navigation } from '../components/Navigation';

export const mainLayout = (Component: React.ComponentType) => () => (
  <div>
    <Navigation />
    <Component />
  </div>
);
