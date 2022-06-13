import React from "react";
import {Link} from 'react-navi'

export default function Todo({ title, description, dateCreated, dateCompleted, complete, 
  id, 
  updateTodo, 
  deleteTodo }) {


    const [complete, updateComplete] = useState(false)

    /*
    function handleCheckEvent = (event) => {
      const newPost = {
        title,
        description,
        dateCreated,
        dateCompleted: Date.now(),
        complete: event.target.checked,
        id,
        updateTodo,
        deleteTodo
      }
      updateTodo(id, newTodo)
    }
    */

      return (
        <div>
          <h3>{title}</h3>
          <div>{description}</div>
          <br />
          <i>
          <b> Created: {dateCreated}</b>
          <input type = "checkbox" value={complete} onClick={handleCheckEvent}></input>
          <b> Status: {complete}</b>
          <b> Completed: {dateCompleted}</b>
          </i>
        </div>
      );
}