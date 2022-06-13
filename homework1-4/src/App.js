import React, { useState, useReducer, useEffect, createContext } from "react";
import { useResource } from 'react-request-hook'
import UserBar from './UserBar'
import PostList from "./PostList";
import CreatePost from "./CreatePost";
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";

import StateContext from "./Context";

import appReducer from "./reducers";
import HeaderBar from "./pages/HeaderBar";
import HomePage from "./pages/HomePage";

import { Router, View } from 'react-navi'
import { mount, route } from 'navi'
import PostPage from "./pages/PostPage";
import TodoPage from "./pages/TodoPage";

function App() {

  const routes = mount({
    '/': route({ view: <HomePage /> }),
    '/post/create':route({ view: <CreatePost /> }),
    '/post/:id': route(req => {
        return { view: <PostPage id={req.params.id} /> }
    }),
    '/todo/create':route({ view: <CreateTodo /> }),
    '/todo/:id': route(req => {
        return { view: <TodoPage id={req.params.id} /> }
    }),
})

  const [user, setUser] = useReducer(useReducer, "")
  //const [user, setUser] = useState("");
  //const posts = [{title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}]
  //const posts = [{title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}]
  
  const [todos, setTodos] = useReducer(todoReducer, { user: '', todos: []})

  const [posts, setPosts] = useReducer(postReducer, { user: '', posts: []})

  const [ state, dispatch ] = useReducer(appReducer, { user: '', posts: [] })
  //const [posts, setPosts] = useState([])

  //<TodoList todos={posts} setPosts = {setTodos}/>
  
  useEffect(() => {
    console.log('user effect hook firing')
    if (state.user) {
       document.title = `${state.user}’s Todo's` 
     } else {
       document.title = 'Homework1-4'
     }
   }, [state.user]
  )

  useEffect(() => {
    console.log('post effect hook firing')
   }, [state.posts]
  )
  //const [posts, setPosts] = useState([])



  return (
    <Router routes={routes}>
      <StateContext.Provider value={{ state, dispatch }}>
        <HeaderBar />
        <View />
      </StateContext.Provider>
    </Router>
  );



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
