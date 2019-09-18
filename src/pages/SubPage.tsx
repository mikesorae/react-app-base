import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { mainLayout } from '../layouts/MainLayout';

const Content = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <p>Sub Page</p>
      <p>{ count }</p>
      <div>
        <Button type="button" onClick={increment}>+</Button>
        <Button type="button" onClick={decrement}>-</Button>
      </div>
    </>
  );
};

export const SubPage = mainLayout(Content);
