import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ENTITY_ICONS } from "../../utils/constants/constants";
const { LEFT_ARROW, RIGHT_ARROW, REMOVE } = ENTITY_ICONS;

const CheckoutItem = ({ cartItem }) => {
  const { clearItemFromCart, removeItemFromCart, addItemToCart } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          {LEFT_ARROW}
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          {RIGHT_ARROW}
        </div>
      </span>
      <span className="price">{price} £</span>
      <div onClick={clearItemHandler} className="remove-button">
        {REMOVE}
      </div>
    </div>
  );
};

export default CheckoutItem;
