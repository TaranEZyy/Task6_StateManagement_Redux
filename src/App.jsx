import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  // Get count and fruitList state from Redux store
  const count = useSelector((state) => state.count);
  const fruitList = useSelector((state) => state.fruits);

  // Dispatch actions
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h2>Fruits:</h2>
      {fruitList && fruitList.length > 0 ? (
        fruitList.map((fruit, index) => (
         <ul> <li><div key={index}>{fruit}</div></li> </ul>
        ))
      ) : (
        <p>No fruits available</p>
      )}
      
    </div>
  );
}

export default App;
