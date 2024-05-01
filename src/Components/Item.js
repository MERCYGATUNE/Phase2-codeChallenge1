import React from 'react'
// import {useState} from 'react';

function ListItem({ person, deletePerson, updatePerson }) {
    return (
      <div className='container'>
        <p>{person.first_name} {person.last_name}</p>
        <p>Email: {person.email}</p>
        <p>Gender: {person.gender}</p>
        <p>Fee Balance: {person.fee_balance}</p>
        <button className="button"
          onClick={() => deletePerson(person.id)}>Delete</button>
        <button className="button"
          onClick={() => updatePerson(person.id, { fee_balance: person.fee_balance + 300 })}>Increase Fee</button>
      </div>
    );
  };
//   console.log(ListItem);
  


export default ListItem