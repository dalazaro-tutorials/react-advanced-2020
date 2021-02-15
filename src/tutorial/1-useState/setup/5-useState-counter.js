import React, { useState } from 'react';

const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  const decreaseCount = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  const increaseCount = () => {
    setCount(count + 1);
  };
  const increaseCountDelay = () => {
    setTimeout(()=>{
      //every time you click the increase later button, it will see all those clicks as an increase to the state
      setCount((prevState)=> {
        return prevState + 1;
      })
    }, 2000);
  };

  return (
    <>
      <div>
        <h2>Regular Counter</h2>
        <h1>{count}</h1>
        <button className="btn" onClick={decreaseCount}>Decrease</button>
        <button className="btn" onClick={resetCount}>Reset</button>
        <button className="btn" onClick={increaseCount}>Increase</button>
      </div>
      <div style={{marginTop: '3rem'}}>
        <h2>More Complex Counter</h2>
        <h1>{count}</h1>
        <button className="btn" onClick={increaseCountDelay}>Increase Later</button>
      </div>
    </>
  );
};

export default UseStateCounter;
