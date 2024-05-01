import React from 'react'
import ListItem from './Item'

function List({data, deletePerson ,updatePerson}) {
  return (
    <div>
      <div>
      {data.map(person => (
        <ListItem key={person.id} person={person} deletePerson={deletePerson} updatePerson={updatePerson} />
      ))}
    </div>


    </div>
  )
}

export default List