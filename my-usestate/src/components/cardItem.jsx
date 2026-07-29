function CardItem({name, price, qty, onIncrease, onDecrease}){
    return(
        <div>
            <p>{name}</p>
            <p>price:${price}</p>
            <button onClick={onDecrease}>
                -
            </button>
            <span>{qty}</span>
            <button onClick={onIncrease}>
                +
            </button>
        </div>
    )}
    export default CardItem;