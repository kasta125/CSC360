import React from "react";
import Post from "./Post";

export default function PostList({ posts = [], setPosts }) {
  function updatePost(id, newPost){
    const updatedState = [...posts]
    updatedState[id] = newPost

    const newPost = post.map((post) => post.id === id ? newPost : post)

    dispatch({''})
    setPosts(updatedState)
  }
  
  return (
    <div>
      {posts.map((p, i) => (
        // <Post title={p.title} content={p.content} author={p.author} key={"post-" + i} />
        <Post {...p} updatedPost = {updatePost} index = {i}  key={"post-" + i} />
      ))}
    </div>
  );
}
