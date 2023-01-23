// Styles:
import {
  CartItemContainer,
  CartItemImage,
  ItemDetails,
  ItemName,
  Price,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={`${name}`} />
      <ItemDetails className="item-details">
        <ItemName>{name}</ItemName>
        <Price>
          {quantity} x £{price}{" "}
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
};
export default CartItem;
