import React, { useEffect, useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("Welcome! Click the button to increase the count.");
  }, []);

  useEffect(() => {
    console.log("Current count:", count);
  }, [count]);

  return (
    <div>
      <h2>useEffect Assignment</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default Home;