import React from "react";
import Post from "./Post";

export default function PostList({ posts = [], setPosts }) {
  function updatePost(index, newPost){
    const updatedState = [...posts]
    updatedState[index] = newPost

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
