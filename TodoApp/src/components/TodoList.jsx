import TodoItem from "./TodoItem";

function TodoList( {todos, onToggle, onDelete}){
    if (todos.length === 0) return <p>No todos yet!</p>;
    return(
        <div>
            {todos.map(todo =>(
                <TodoItem
                    key={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    onToggle={() => onToggle(todo.id)}
                    onDelete={ () => onDelete(todo.id)}
                ></TodoItem>
            )
            )}
        </div>
    )
}
export default TodoList;