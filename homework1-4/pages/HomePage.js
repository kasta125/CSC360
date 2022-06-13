import React, { useEffect, useContext } from "react";
import StateContext from "../Context";
import { useResource } from "react-request-hook";
import PostList from "../PostList";
import TodoList from "../TodoList";

export default function HomePage() {
  const { state, dispatch } = useContext(StateContext);

  const [posts, getPosts] = useResource(() => ({
    url: "/posts",
    method: "get",
  }));

  const [todos, getTodos] = useResource(() => ({
    url: "/todos",
    method: "get",
  }));

  useEffect(getPosts, []);

  useEffect(getTodos, []);

  useEffect(() => {
    if (posts && posts.data) {
      dispatch({ type: "FETCH_POSTS", posts: posts.data.posts });
    }
  }, [posts]);

  useEffect(() => {
    if (todos && todos.data) {
      dispatch({ type: "FETCH_TODOS", todos: todos.data.todos });
    }
  }, [todos]);

  return (
    <div>
      <PostList posts={state.posts} />
      <TodoList todos={state.todos} />
    </div>
    );
}
