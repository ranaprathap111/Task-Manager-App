
function TodoItem({text, completed, onToggle, onDelete, onEdit}){
    return(
        <div>
            <input type="checkbox"
            checked={completed} 
            onChange={onToggle}/>
            <span style={{textDecoration:completed ? "line-through" : "none"}}>{text}</span>
            <button>Edit</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}
export default TodoItem;