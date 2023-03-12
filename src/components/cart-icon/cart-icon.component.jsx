// Redux:
import { useSelector, useDispatch } from "react-redux";
// Selectors:
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selector.js";
// Actions:
import { setIsCartOpen } from "../../store/cart/cart.action.js";
// Styles:
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon.styles.js";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
