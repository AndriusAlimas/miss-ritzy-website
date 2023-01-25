// React:
import { useContext } from "react";
// Component:
import CheckoutItem from "../../checkout-item/checkout-item.component";
// Contexts:
import { CartContext } from "../../../contexts/cart.context";
// Styles:
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";
// Constants:
import { PRODUCT_HEADERS } from "../../../utils/constants/constants";
const { PRODUCT, DESCRIPTION, QUANTITY, PRICE, REMOVE } = PRODUCT_HEADERS;

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>{PRODUCT}</HeaderBlock>
        <HeaderBlock>{DESCRIPTION}</HeaderBlock>
        <HeaderBlock>{QUANTITY}</HeaderBlock>
        <HeaderBlock>{PRICE}</HeaderBlock>
        <HeaderBlock>{REMOVE}</HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: {cartTotal} £</Total>
    </CheckoutContainer>
  );
};
export default Checkout;
