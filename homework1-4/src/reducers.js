function userReducer(state, action){
    switch (action.type){
      case "LOGIN":
      case "REGISTER":
        return action.username;
      case "LOGOUT":
        return "";
      //case "ADDRESS_CHANGE":
        //
      default:
        return state;
    }
}

function postReducer(state, action){
    switch (action.type){
      case "CREATE_POST":
        const newPost ={
          title: action.title,
          content: action.content,
          author: action.author,
        };
        return [newPost, ...state];
      case "DELETE_POST":
        return state.filter(post => post.id != action.id)
      default:
        return state;
    }
}

function todoReducer(state, action){
  switch (action.type){
    case "CREATE_TODO":
      const newTodo ={
        title: action.title,
        description: action.description,
        dateC: action.dateCreated,
        dateC: action.dateCompleted,
        complete: action.complete,
        id: action.id
      };
      return [newTodo, ...state];
    case "TOGGLE_TODO":
      console.log('Hi im the reducer')
      return state.filer(todo => todo.id = action.id)
    case "DELETE_TODO":
      return state.filter(todo => todo.id != action.id)
    default:
      return state;
  }
}

export default function appReducer (state, action){
    return {
        user: userReducer(state.user, action),
        posts: postReducer(state.posts, action),
        todos: todoReducer(state.todos, action)
    }
}