// Context:
import { useContext } from "react";
import { CategoriesContext } from "../../../contexts/categories.context";
// Components:
import ProductCard from "../../product-card/product-card.component";
// Styles:
import "./shop.styles.scss";

const Shop = () => {
  const {} = useContext(CategoriesContext);
  return (
    <div className="products-container">
      {/* {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
    </div>
  );
};
export default Shop;
