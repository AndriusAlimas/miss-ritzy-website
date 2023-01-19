// React:
import { useContext } from "react";
// Contexts:
import { CartContext } from "../../../contexts/cart.context";
// Constants:
import { PRODUCT_HEADERS } from "../../../utils/constants/constants";
import CheckoutItem from "../../checkout-item/checkout-item.component";
// Styles:
import "./checkout.styles.scss";

const Checkout = () => {
  const { PRODUCT, DESCRIPTION, QUANTITY, PRICE, REMOVE } = PRODUCT_HEADERS;
  const { removeItemToCart, addItemToCart, cartItems } =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>{PRODUCT}</span>
        </div>
        <div className="header-block">
          <span>{DESCRIPTION}</span>
        </div>
        <div className="header-block">
          <span>{QUANTITY}</span>
        </div>
        <div className="header-block">
          <span>{PRICE}</span>
        </div>
        <div className="header-block">
          <span>{REMOVE}</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span>Total 0</span>
    </div>
  );
};
export default Checkout;
