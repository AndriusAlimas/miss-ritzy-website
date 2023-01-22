// React:
import { useContext } from "react";
// Context:
import { CategoriesContext } from "../../../contexts/categories.context";
// Components:
import CategoryPreview from "../../category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};
export default CategoriesPreview;
