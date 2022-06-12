import React from "react";

export default function Todo({ title, description, dateCreated, dateCompleted, complete }) {
  
    return (
      <div>
        <h3>{title}</h3>
        <div>{description}</div>
        <br />
        <i>
         <b> Created: {dateCreated}</b>
         <b> Status: {complete}</b>
         <b> Completed: {dateCompleted}</b>
        </i>
      </div>
    );
  }