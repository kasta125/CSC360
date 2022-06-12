import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos = [], setTodos }) {
  function updateTodo(id, newTodo){
    const updatedState = [...todos]
    updatedState[id] = newTodo

    const newTodo = todo.map((todo) => todo.id === id ? newTodo : todo)

    dispatch({ type: 'TOGGLE_TODO', newTodo})
    setTodos(updatedState)
  }

  return (
    <div>
      {todos.map((p, i) => (
        // <Todo title={p.title} content={p.description} dateCreated={new Date().toLocaleDateString()} completed={false} dateCompleted={null} key={"todo-" + i} />
        <Todo {...p} updatedTodo = {updateTodo} index = {i} key={"todo-" + i} updateTodo={} />
      ))}
    </div>
  );
}