import React, { useContext } from "react";
import Header from "../Header";
import UserBar from "../UserBar";
import CreatePost from "../CreatePost";
import CreateTodo from "../CreateTodo";

import { ThemeContext } from "../App";
import StateContext from "../Context";

import { Link } from "react-navi";

export default function HeaderBar() {
  const { state, dispatch } = useContext(StateContext);

  return (
    <>
      <ThemeContext.Provider value={{ primary: "orange" }}>
        <Header text="Kory Asta HW" />
      </ThemeContext.Provider>
      <UserBar user={state.user.username} dispatch={dispatch} />
      {state.user.username && <Link href="/post/create">Create New Post</Link>}
      {state.user.username && <Link href="/todo/create">Create New Todo</Link>}
    </>
  );
}
