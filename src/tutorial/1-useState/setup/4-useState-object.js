import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message'
  });
  const changeMessage = () => {
    setPerson({...person, message: (person.message === 'random message') ? 'hello world' : 'random message' });
  };

  console.log(person);
  return (
    <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>change message</button>
    </React.Fragment>
  );
};

export default UseStateObject;
