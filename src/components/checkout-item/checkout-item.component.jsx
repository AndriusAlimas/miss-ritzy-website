// React:
import { useContext } from "react";
// Context:
import { CartContext } from "../../contexts/cart.context";
// Styles:
import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles";
// Constants:
import { ENTITY_ICONS } from "../../utils/constants/constants";
const { LEFT_ARROW, RIGHT_ARROW, REMOVE } = ENTITY_ICONS;

const CheckoutItem = ({ cartItem }) => {
  const { clearItemFromCart, removeItemFromCart, addItemToCart } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;

  // Handlers:
  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>{LEFT_ARROW}</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>{RIGHT_ARROW}</Arrow>
      </Quantity>
      <BaseSpan>{price} £</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>{REMOVE}</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
