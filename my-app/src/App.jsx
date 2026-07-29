import Avatar from './components/Avatar';
import Header from './components/Header';
import Card from './components/Card';
import Button from './components/Button';
import Footer from './components/Footer';
import Welcome from "./components/Prop";
import Properties from "./components/Properties";
import TodoItem from './components/TodoItem';
import { useState } from 'react';

function App(){
  // function handleClick(){
  //   console.log("todo clicked");
  // }
  // return(
  //   <div>
    
  //   <Avatar></Avatar>
  //   <Header></Header>
  //   <Card title="react" text="Day 1"></Card>
  //   <Button></Button>
  //   <Footer></Footer>
  //   <Button></Button>
  //    <Card title="JSX" text="Day 2"></Card>
  // <div>
  //   <Welcome name="rana" age="23"></Welcome>
  //   <Properties title="Day 2" button="login"></Properties>
  //   <div>
  //     <h1>my Todo</h1>
  //     <TodoItem text='learn JSX' 
  //     completed={true}  
  //     onToggle={handleClick}></TodoItem>
    
  //     <TodoItem text='props' 
  //     completed={true}  
  //     onToggle={handleClick}></TodoItem>

  //     <TodoItem text='xml' 
  //     completed={true}  
  //     onToggle={handleClick}></TodoItem>

  //     <TodoItem text='childern props' 
  //     completed={true}  
  //     onToggle={handleClick}>
  //     </TodoItem>

  //     <TodoItem text='learn prop Drilling' 
  //     completed={true}  
  //     onToggle={handleClick}>
  //     </TodoItem>
  //     <p>React automatically provides a special prop called children.</p>
      
  //   </div>
  // </div>
  // </div>
  // );

const [todos,setTodos]=useState([
  {id:1,text:'Learn React',completed:true},
  {id:2,text:'Learn Props',completed:true},
  {id:3,text:'Learn State',completed:true},
  {id:4,text:'Learn hooks',completed:false},
  {id:5,text:'Build project',completed:false},
]);

  function toggleTodo(id){
    setTodos(
      todos.map(todos=>
        todos.id === id ?{...todos, completed:!todos.completed}: todos
      )
    );
  }

  const [newText,setNewText]=useState('')

  function addTodo(e){
    e.preventDefault();
  if(!newText.trim()) return;
    setTodos([...todos,{id : Date.now(), text : newText, completed:false}])
    setNewText('');
  }
  function deleteTodo(id){
    setTodos(todos.filter(todos => todos.id !== id));
  }

  const todoCompleted_count = todos.filter(todos => todos.completed).length

  return(
    <div>
      <h1>my todos</h1>

    <form onSubmit={addTodo}>
      <input
      value={newText}
      onChange={(e)=> setNewText(e.target.value)}
      placeholder='add todo item'
      >
      </input>
      <button type="submit">
          Add
        </button>
    </form>

      {/* {todos.length === 0 && <p>No todos yet!</p>} */}

      {todos.map(todos=>
       (
        <TodoItem
        key={todos.id}
        text={todos.text}
        completed={todos.completed}
        onToggle={()=> toggleTodo(todos.id)}
        onDelete={() => deleteTodo(todos.id)}
        >
        </TodoItem>
       ) 
      )}
      <h4>Todocompleted:{todoCompleted_count}</h4>
    </div>
  );
}
export default App;