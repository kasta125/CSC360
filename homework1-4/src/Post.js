import React from "react";

export default function Post({ title, content, author, dateCreated, dateCompleted, completed }) {
  
  /*
  function handleCheck(event){
    const newPost = {
      title,
      content,
      author,
      dateCreated,
      dateCompleted: Date.now(),
      complete: event.target.checked
    }
    updatePost(id, newPost)
  }
  */
  
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
      <input type="checkbox" value = {completed} onChange = {handleCheck}></input>
    </div>
  );
}
