// React
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Contexts:
import { CartContext } from "../../contexts/cart.context";
// Components:
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

// Styles:
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const goToCheckoutPage = () => navigate("/checkout", { state: { cartItems: cartItems} });
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button
        buttonOptions={{
          onClick: () => goToCheckoutPage(),
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;
