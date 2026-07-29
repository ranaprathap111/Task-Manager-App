import { useState } from 'react';
// import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App(){

  const [todos,setTodos]=useState([]);

  function addTodo(text){
    setTodos([...todos, { id : Date.now(), text, completed : false} ]);
  }

  function toggleTodo(id){
    setTodos(todos.map(item =>item.id === id ? {...item, completed: !item.completed} : item));
  }

  function deleteTodo(id){
    setTodos(todos.filter(item => item.id !== id))
  }
return(
  <div>
  
    <TodoInput onAddTodo={addTodo}></TodoInput>
    <TodoList todos={todos} 
     onToggle={toggleTodo} 
     onDelete={deleteTodo}>
      
     </TodoList>
  </div>
)
}
export default App;