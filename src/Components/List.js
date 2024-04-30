import React from 'react'
import ListItem from './ListItem';

function List() {
  return (
    <div>
      <div>
      {data.map(item => (
        <ListItem key={ListItem.id} item={ListItem} deleteItem={deleteListItem} updateItem={updateListItem} />
      ))}
    </div>


    </div>
  )
}

export default List