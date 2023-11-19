import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component did mount');

    return () => {
      console.log('Component will unmount');
    };
  }, []);

  useEffect(() => {
    console.log('Component did update');
    console.log('Current count:', count);
  }, [count]);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default MyComponent;