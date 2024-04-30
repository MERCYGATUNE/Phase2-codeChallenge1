import React from 'react'
import {useState} from 'react';

function ListItem({ListItem,deleteListItem,updateListItem}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedListItem, setEditedListItem] = useState(item);
  
    const handleDelete = () => {
      deleteItem(ListItem.id);
    };
  
    const handleEdit = () => {
      setIsEditing(true);
    };
  
    const handleSave = () => {
      updateItem(ListItem.id, editedListItem);
      setIsEditing(false);
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setEditedListItem({ ...editedListItem, [name]: value });
    };



  return (
    <div>
    {isEditing ? (
        <div>
          <input type="text" name="first_name" value={editedItem.first_name} onChange={handleChange} />
          <input type="text" name="last_name" value={editedItem.last_name} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>{item.first_name} {item.last_name}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}



    </div>
  )
}

export default ListItem