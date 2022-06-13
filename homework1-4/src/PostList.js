import React from "react";
import Post from "./Post";

export default function PostList({ posts = [], setPosts }) {
  const updatePost = (id, newPost) => {
    //const updatedState = [...posts]
    //updatedState[id] = newPost

    const updatedPosts = post.map((post) => post.id === id ? updatedPosts : post)

    dispatch({type: 'TOGGLE_POST', updatedPosts})
    //setPosts(updatedState)
  }

  const deletePost = (id) => {
    posts.filter((post) => post.id !== id)
    //const updatedState = [...posts]
    //updatedState[id] = newPost

    //const newPost = post.map((post) => post.id === id ? newPost : post)

    dispatch({type: 'DELETE_POST', updatedPosts})
    //setPosts(updatedState)
  }
  
  return (
    <div>
      {posts.map((p, i) => (
        // <Post title={p.title} content={p.content} author={p.author} key={"post-" + i} />
        <Post {...p} index = {i}  key={"post-" + i} updatedPost = {updatePost} deletePost = {deletePost} />
      ))}
    </div>
  );
}
