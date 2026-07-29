
import { useState } from "react";

function TodoInput({onAddTodo}){

    const[newtext,setNewText]=useState('')

    function handleSubmit(e){
        e.preventDefault();
        if(!newtext.trim()) return;
        onAddTodo(newtext);
        setNewText('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                value={newtext}
                onChange={(e) =>setNewText(e.target.value)}
                placeholder="Add a todo"
                />
                <button type='submit'>Add</button>
            </form>
            
        </div>
    )
}
export default TodoInput;