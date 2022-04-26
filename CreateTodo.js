import React from "react";

export default function CreateTodo({ user }) {
    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")
    
    function handleTitle (evt) { setTitle(evt.target.value) }
    function handleDescription (evt) { setDescription(evt.target.value) }

    function handleCreate() {
        const newTodo = { title, description, dateCreated, complete, dateCompleted }
        setPosts([newTodo, ...todos])
    }
  
    return (
      <>
      <h2>Create a New Todo</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleCreate(e) }}>
        <div>
          Author: <b>{user}</b>
        </div>
        <div>
          <label htmlFor="create-title">Title:</label>
          <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
        </div>
        <textarea value={description} onChange={handleDescription} />
        <div>
          Created: <b>{dateCreated}</b>
          Completed: <b>{completed}</b>
          Finished: <b>{dateCompleted}</b>
        </div>

        <input type="submit" value="Create" />
        </form>
    </>
    );
}