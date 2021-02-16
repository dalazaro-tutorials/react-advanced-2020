import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);

  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const toggleError = () => {
    return setIsError(!isError);
  }

  return (
    <>
      <h1>{text || 'john doe'}</h1>
      <button className="btn" onClick={toggleError}>toggle error</button>
      {isError ? <p>there is an error</p> : <p>there is not an error</p> }
      {isError && <h1>Error...</h1>}
    </>
  );
};

export default ShortCircuit;
