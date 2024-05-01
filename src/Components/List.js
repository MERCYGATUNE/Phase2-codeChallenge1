import React from 'react'


function List({data, deleteListItem ,updateListItem}) {
  return (
    <div>
      <div>
      {data.map(ListItem => (
        <ListItem key={ListItem.id} item={ListItem} deleteItem={deleteListItem} updateItem={updateListItem} />
      ))}
    </div>


    </div>
  )
}

export default List