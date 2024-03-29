// React:
import { useNavigate } from "react-router-dom";
// Redux:
import { useSelector } from "react-redux";
// Selectors:
import { selectCartItems } from "../../store/cart/cart.selector";
// Components:
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

// Styles:
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);

  const goToCheckoutPage = () => navigate("/checkout");
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button
        buttonOptions={{
          onClick: () => goToCheckoutPage(),
        }}
      >
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
