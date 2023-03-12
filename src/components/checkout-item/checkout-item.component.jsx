// Redux:
import { useDispatch, useSelector } from "react-redux";
// Selectors:
import { selectCartItems } from "../../store/cart/cart.selector";
// Actions:
import {
  clearItemFromCart,
  removeItemFromCart,
  addItemToCart,
} from "../../store/cart/cart.action";
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
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price, quantity } = cartItem;

  // Handlers:
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

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
