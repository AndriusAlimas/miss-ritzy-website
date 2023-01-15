// React
import { useContext } from "react";
// Context
import { CartContext } from "../../contexts/cart.context";
// Components
import Button from "../button/button.component";
// Styles
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}£</span>
      </div>
      <Button
        buttonType="inverted"
        buttonOptions={{
          onClick: () => addProductToCart(),
        }}
      >
        Add to cart
      </Button>
    </div>
  );
};
export default ProductCard;
