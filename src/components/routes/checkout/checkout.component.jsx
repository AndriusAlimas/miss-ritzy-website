// Redux
import { useSelector } from "react-redux";
// Selector:
import {
  selectCartItems,
  selectCartTotal,
} from "../../../store/cart/cart.selector";
// Component:
import CheckoutItem from "../../checkout-item/checkout-item.component";
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
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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
