import React from 'react'
import './Item.css';

function Item({ person, removePerson, updatePerson,createPerson }) {
    return (
      <div className='container'>
        <p>{person.first_name} {person.last_name}</p>
        <p>Email: {person.email}</p>
        <p>Gender: {person.gender}</p>
        <p>Fee Balance: {person.fee_balance}</p>
        <button className="button"
          onClick={() => removePerson(person.id)}>Delete</button>
        <button className="button"
          onClick={() => updatePerson(person.id, { fee_balance: person.fee_balance + 300 })}>INCREASE FEE!</button>


      </div>
    );
  };

  


export default Item