// React
import { useContext } from "react";
// Context
import { CartContext } from "../../contexts/cart.context";
// Constants:
import {
  ADD_TO_CART,
  BUTTON_TYPE_CLASSES,
} from "../../utils/constants/constants";
// Components
import Button from "../button/button.component";
import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from "./product-card.styles";
// Styles

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

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
