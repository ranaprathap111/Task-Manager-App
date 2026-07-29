import { useState } from "react";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App(){

  const [todos,setTodos]=useState([])

  function addTodo(text){
    setTodos([...todos,{id:Date.now(), text, completed:false}]);
  }

  function toggleTodo(id){
    setTodos(todos.map(todo => todo.id ===id ?{...todo, completed:!todo.completed}: todo ));
  }

  function deleteTodo(id){
    setTodos(todos.filter(todo => todo.id !== id ));
  }

  return(
    <div>
      <h1>Task manager</h1>
      <TodoInput onAddTodo={addTodo}></TodoInput>
      <TodoList 
      todos={todos}
      onToggle={toggleTodo}
      onDelete={deleteTodo}
      ></TodoList>
    </div>
  )
}
export default App;