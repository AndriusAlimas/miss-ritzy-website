// Redux
import { useDispatch, useSelector } from "react-redux";
// Selectors:
import { selectCartItems } from "../../store/cart/cart.selector";
// Actions:
import { addItemToCart } from "../../store/cart/cart.action";
// Constants:
import {
  ADD_TO_CART,
  BUTTON_TYPE_CLASSES,
} from "../../utils/constants/constants";
// Components
import Button from "../button/button.component";
// Styles
import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from "./product-card.styles";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { imageUrl, name, price } = product;
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}£</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        buttonOptions={{
          onClick: () => addProductToCart(),
        }}
      >
        {ADD_TO_CART}
      </Button>
    </ProductCardContainer>
  );
};
export default ProductCard;
