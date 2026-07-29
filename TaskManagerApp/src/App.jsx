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

  function editTodo(id, newtext){
    setTodos(todos.map(todo => todo.id ===id ?{...todo, text: newtext}: todo));
  }

  return(
    <div>
      <h1>Task manager</h1>
      <TodoInput onAddTodo={addTodo}></TodoInput>
      <TodoList 
      todos={todos}
      onToggle={toggleTodo}
      onDelete={deleteTodo}
      onEdit={editTodo}
      ></TodoList>
    </div>
  )
}
export default App;