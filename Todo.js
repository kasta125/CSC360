import React from "react";

export default function Todo({ title, description, dateCreated, complete, dateCompleted }) {
    return (
      <div>
        <h3>{title}</h3>
        <div>{description}</div>
        <br />
        <i>
          Created: <b>{dateCreated}</b>
          Status: <b>{complete}</b>
          Finished: <b>{dateCompleted}</b>
        </i>
      </div>
    );
  }