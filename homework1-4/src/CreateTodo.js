import React from "react";

export default function CreateTodo({ user, setTodos, todos }) {
    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")
    
    function handleTitle (evt) { setTitle(evt.target.value) }
    function handleDescription (evt) { setDescription(evt.target.value) }

    function handleCreate (evt) {
        const newTodo = { title, description, dateCreated: Date.now(), dateCompleted: null, complete: null }
        //setTodos([newTodo, ...todos])

        dispatchPost({type: 'CREATE_TODO', title, description, dateCreated: Date.now(), dateCompleted: null, complete: null})
    }
  
    return (
      <>
      <h2>Create a New Todo</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleCreate(e) }}>
        <div>
          <label htmlFor="create-title">Title:</label>
          <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
        </div>
        <textarea value={description} onChange={handleDescription} />
        <div>
          Created On: <b>{dateCreated}</b>
          Complete: <b>{complete}</b>
          Finished: <b>{dateCompleted}</b>
        </div>

        <input type="submit" value="Create" />
        </form>
    </>
    );
}