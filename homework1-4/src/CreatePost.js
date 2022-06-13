import React, {useState, useContext, useEffect} from "react";

export default function CreatePost() { //{ user, dispatchPosts, posts }
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
    if (post && post.data && post.isLoading === false) {
      navigation.navigate(`/post/${post.data.id}`);
    }
  }, [post]);
  
  function handleCreate (evt) {  
    //const newPost = { title, content, author: user, dateCreated: Date.now(), dateCompleted: null, complete: false }
    //console.log(newPost)
    // const newPostCopy = { ...newPost }
    //setPosts([newPost, ...posts])
    createPost({ title, content, author: user.username });
    dispatchPosts({type: 'CREATE_POST', title, content, author: user})
  }

  

  return (
    <>
    <h2>Create a New Post</h2>
    <form onSubmit={(e) => { e.preventDefault(); handleCreate(e) }}>
      <div>
        Author: <b>{user.username}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
      </div>
      <textarea value={content} onChange={handleContent} />
      <input type="submit" value="Create" />
    </form>
    </>

  );
}
