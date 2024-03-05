import React from 'react'
import { useCallback, useState } from 'react'

import './App.css'

export const App = (props: { message: string }) => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, [count]);

  return (
    <>
      <h1 className="text-4xl text-red-500">{props.message}</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </>
  );
};
