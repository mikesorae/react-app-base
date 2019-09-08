import React, { useState } from 'react';
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
        <button type="button" onClick={increment}>+</button>
        <button type="button" onClick={decrement}>-</button>
      </div>
    </>
  );
};

export const SubPage = mainLayout(Content);
