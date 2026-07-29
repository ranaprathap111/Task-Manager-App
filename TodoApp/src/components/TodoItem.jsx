
function TodoItem({text, completed, onToggle, onDelete}){
    return(
        <div>
            <input type="checkbox" checked={completed} onChange={onToggle}/> 
            <span  style={{textDecoration : completed ? 'line-through' : 'none'}}>{text}</span>
            <button onClick={onDelete}>Delete</button>
        </div> 
    )
}
export default TodoItem;