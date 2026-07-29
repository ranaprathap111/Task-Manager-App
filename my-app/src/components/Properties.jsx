function Properties({title,button,text="no text"}){
    return(
        <div>
            <h1>{title}</h1>
            <button>{button}</button>
            <p>{text}</p>

        </div>
    )
}
export default Properties;