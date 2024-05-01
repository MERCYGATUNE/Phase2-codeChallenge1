import React from 'react'
import Item from './Item'

function List({data, deletePerson ,updatePerson}) {
  return (
    <div>
      <div>
      {data.map(person => (
        <Item key={person.id} person={person} deletePerson={deletePerson} updatePerson={updatePerson} />
      ))}
    </div>


    </div>
  )
}

export default List