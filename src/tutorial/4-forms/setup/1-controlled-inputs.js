import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(name && email){
      setPeople([...people, {id: new Date().getTime().toString(), name, email}]);
      setName('');
      setEmail('');
      alert('Person submitted!');
    }else{
      if(!name){
        alert('Please enter a name.');
        return;
      }
      if(!email){
        alert('Please enter an email address.');
        return;
      }
    }
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        <h2>Sign Up List</h2>
        {people.map(({id, name, email}) => {
          return <div key={id} id={'person_' + id} className="item">
            <h4>{name}</h4>
            <p>{email}</p>
          </div>
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
