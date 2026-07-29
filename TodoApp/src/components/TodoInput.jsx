 import { useState } from "react";

 function TodoInput({onAddTodo}){
    const [newText,setNewText]=useState('');

    function handleSubmit(e){
        e.preventDefault();
        if(!newText.trim()) return;
        onAddTodo(newText)
        setNewText('')
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                placeholder="Add a Todo"
                ></input>
                <button type="submit">
                    Add
                </button>
            </form>
        </div>
    )
 } export default TodoInput;