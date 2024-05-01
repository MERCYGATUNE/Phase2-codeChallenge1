import React from 'react'
import Item from './Item';
import './List.css';

function List({data, deletePerson ,updatePerson}) {
  return (
    <div className='List'>
      <div>
      {data.map(person => (
        <Item key={person.id} person={person} deletePerson={deletePerson} updatePerson={updatePerson} />
      ))}
    </div>


    </div>
  )
}

export default List