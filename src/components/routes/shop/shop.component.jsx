// React:
import { Fragment, useContext } from "react";
// Context:
import { CategoriesContext } from "../../../contexts/categories.context";
// Components:
import ProductCard from "../../product-card/product-card.component";
// Styles:
import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </>
  );
};
export default Shop;
