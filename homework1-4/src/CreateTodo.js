import React from "react";

export default function CreateTodo() { //{ user, dispatchTodos, todos }
  const [ title, setTitle ] = useState("")
  const [ content, setContent ] = useState("")

  const navigation = useNavigation();

  const { state, dispatch } = useContext(StateContext);
  const { user } = state;

  function handleTitle (evt) { setTitle(evt.target.value) }
  function handleContent (evt) { setContent(evt.target.value) }
  
  const [post, createPost] = useResource(({ title, content, author }) => ({
    url: "/posts",
    method: "post",
    headers: { Authorization: `${state.user.access_token}` },
    data: { title, content, author },
  }));

  useEffect(() => {
    if (todo && todo.data && todo.isLoading === false) {
      navigation.navigate(`/todo/${todo.data.id}`);
    }
  }, [todo]);
  
  function handleCreate (evt) {  
    //const newPost = { title, content, author: user, dateCreated: Date.now(), dateCompleted: null, complete: false }
    //console.log(newPost)
    // const newPostCopy = { ...newPost }
    //setPosts([newPost, ...posts])
    createPost({ title, content, author: user.username });
    dispatchPosts({type: 'CREATE_TODO', title, description})
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