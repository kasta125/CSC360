import React from "react";
import Post from "./Post";

export default function TodoList({ todos = [] }) {
  return (
    <div>
      {todos.map((p, i) => (
        // <Post title={p.title} content={p.description} dateCreated={new Date().toLocaleDateString()} completed={false} dateCompleted={null} key={"post-" + i} />
        <Todo {...p} key={"Todo-" + i} />
      ))}
    </div>
  );
}