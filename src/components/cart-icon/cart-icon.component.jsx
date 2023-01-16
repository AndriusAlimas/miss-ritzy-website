// React:
import { useContext } from "react";
// Contexts:
import { CartContext } from "../../contexts/cart.context";
// Components:
import { ReactComponent as ShoppingIcon } from "./../../assets/svg/shopping-bag.svg";
// Styles:
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { cartCount, isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};
export default CartIcon;
