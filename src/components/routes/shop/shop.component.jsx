// React:
import { Fragment, useContext } from "react";
// Context:
import { CategoriesContext } from "../../../contexts/categories.context";
// Components:
import CategoryPreview from "../../category-preview/category-preview.component";
// Styles:
import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};
export default Shop;
