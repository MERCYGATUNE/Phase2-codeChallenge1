import React from 'react'
import Item from './Item';
import './List.css';

function List({data, removePerson ,updatePerson}) {
  return (
    <div className='List'>
      <div>
      {data.map(person => (
        <Item key={person.id} person={person} removePerson={removePerson} updatePerson={updatePerson} />
      ))}
    </div>


    </div>
  )
}

export default List