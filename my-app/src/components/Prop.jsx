function Welcome(props){
    return(
        <div>
        <h1 style={{fontSize:"30px"}}>hello{props.name}</h1>
        <p>{props.age}</p>
        </div>
    )
}
export default Welcome;