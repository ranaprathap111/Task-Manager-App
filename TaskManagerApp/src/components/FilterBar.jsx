
function FilterBar({filter,setFilter}){
    return(
        <div>
        <button onClick={() =>setFilter('all')}>All</button>
        <button onClick={() =>setFilter('active')}>Active</button>
        <button onClick={() =>setFilter('completed')}>completed</button>
    </div>
    )
}
export default FilterBar;