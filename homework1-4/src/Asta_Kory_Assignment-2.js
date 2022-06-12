import React, { useState } from "react";
import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import UserBar from './UserBar';
import Post from './Post';
import PostList from './PostList';
import Todo from './Todo';
import TodoList from './TodoList';


function App() {
    const [user, setUser] = useState("");

    return (
        <div>
            <UserBar user={user} setUser={setUser} />
            {user && <CreateTodo user={user} todos={todos} setTodos={setTodos} />}
            <TodoList todos={todos} />
        </div>
    );
    //login

    //registra1tion 

    //logout
}

export default App;