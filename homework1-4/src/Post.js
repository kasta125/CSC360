import React from "react";
import {Link} from 'react-navi'

export default function Post({ title, content, author, dateCreated, dateCompleted, complete, id, updatePost, deletePost }) {
  const handleCheckEvent = (event) => {
    const newPost = {
      title,
      content,
      dateCreated,
      dateCompleted: Date.now(),
      complete: event.target.checked,
      id,
      updatePost,
      deletePost
    }
    updatePost(id, {title, content, author, dateCreated, dateCompleted: Date.now(), complete: !complete, id, updatePost, deletePost})
  }

  return (
    <div>
      <h3>{title}</h3>
      <div>{content}</div>
      <br />
      <i>
        Written by <b>{author}</b>
      </i>
      <br/>
        Complete:  <b>{completed}</b>
      <br/>
        Created On:  <b>{dateCreated}</b>
      <br/>
        Completed On:  <b>{dateCompleted}</b>
      <input type="checkbox" value = {completed} onClick = {handleCheckEvent}>Done</input>
      <input type="button" value = "Delete this Post" onClick = {() => deletePost(id)}>Delete Post</input>
    </div>
  );
}
