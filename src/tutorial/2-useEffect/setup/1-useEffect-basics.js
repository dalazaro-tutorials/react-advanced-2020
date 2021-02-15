import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('call useEffect');
    if(value > 0){
      document.title = `New Messages (${value})`;
    }
  }, [value]);
  // second parameter: list of dependencies
  // leave second parameter blank, useEffect will only run on initial render
  // add a dependency, useEffect runs every time the dependency is modified/updated

  console.log('render component');

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
