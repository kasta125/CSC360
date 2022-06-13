import React, { useState, useReducer } from "react";
import UserBar from './UserBar'
import PostList from "./PostList";
import CreatePost from "./CreatePost";
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";

import appReducer from "./reducers";

function App() {

  const [user, setUser] = useReducer(useReducer, "")
  //const [user, setUser] = useState("");
  //const posts = [{title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}]
  //const posts = [{title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}]
  
  const [todos, setTodos] = todoReducer(todoReducer, { user: '', todos: []})

  const [posts, dispatchPosts] = useReducer(appReducer, { user: '', posts: []})
  //const [posts, setPosts] = useState([])

  //<TodoList todos={posts} setPosts = {setTodos}/>
  
  return (
    <div>
      <UserBar user={user} setUser={setUser} />
      {user && <CreatePost user={user} posts={posts} setPosts={setPosts} />}
      {user && <Create user={user} posts={posts} setPosts={setPosts} />}
      <PostList posts={posts} setPosts = {setPosts}/>
      <TodoList todos={todos} setTodos = {setTodos}/>
    </div>
  );
  
  
}

export const ThemeContext = createContext({primary:'red'})

export default App;
