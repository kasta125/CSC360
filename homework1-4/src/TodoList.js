import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos = [], setTodos }) {
  function updateTodo(index, newTodo){
    const updatedState = [...todos]
    updatedState[index] = newTodo

    setTodos(updatedState)
  }

  return (
    <div>
      {todos.map((p, i) => (
        // <Todo title={p.title} content={p.description} dateCreated={new Date().toLocaleDateString()} completed={false} dateCompleted={null} key={"todo-" + i} />
        <Todo {...p} updatedTodo = {updateTodo} index = {i} key={"todo-" + i} />
      ))}
    </div>
  );
}