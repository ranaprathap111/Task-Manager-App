import { useState } from "react";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";

function App(){

  const [todos,setTodos]=useState([]);
  const [filter,setFilter]=useState('all');

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

  const filteredTodos = todos.filter(todo => {
    if(filter === 'active')return todo.completed === false;
    //  or if(filter === 'active')return !todo.completed;
    if(filter ==='completed')return todo.completed;
    // if(filter ==='completed')return todo.completed === true;
    return true;
  })

  return(
    <div>
      <h1>Task manager</h1>
      <TodoInput onAddTodo={addTodo}></TodoInput>
      <FilterBar filter={filter} setFilter={setFilter}></FilterBar>
      <TodoList 
      todos={filteredTodos}
      onToggle={toggleTodo}
      onDelete={deleteTodo}
      onEdit={editTodo}
      ></TodoList>
    </div>
  )
}
export default App;