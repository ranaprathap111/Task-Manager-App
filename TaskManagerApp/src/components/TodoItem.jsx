import { useState } from "react";

function TodoItem({text, completed, onToggle, onDelete, onEdit}){

    const [isEditing,setIsEditing]=useState(false);
    const [editText,setEditText]=useState(text);

    function handleSave(){
        if(!editText.trim()) return;
        onEdit(editText)
        setIsEditing(false)
    }


    if(isEditing){
        return(
            <div>
              <input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={handleSave}>save</button>
              <button onClick={()=> setIsEditing(false)}>cancel</button>
            </div>
        )
    }

    return(
        <div>
            <input type="checkbox"
            checked={completed} 
            onChange={onToggle}/>
            <span style={{textDecoration:completed ? "line-through" : "none"}}>{text}</span>
            <button onClick={()=> setIsEditing(true)}>Edit</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}
export default TodoItem;