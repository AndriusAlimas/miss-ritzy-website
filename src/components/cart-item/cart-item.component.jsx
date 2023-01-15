import "./cart-item.styles.scss";

const CartItem = ({cartItem}) =>
{

    const {name, id} = cartItem;

    return(
        <div>
             <h2>{name}</h2>
            {/* <span>{quantity}</span> */}
        </div>
    )
}

export default CartItem;