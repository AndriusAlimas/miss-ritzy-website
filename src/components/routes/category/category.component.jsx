// React
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// Redux:
import { useSelector } from "react-redux";
// Selector:
import { selectCategoriesMap } from "../../../store/categories/category.selector";
// Components:
import ProductCard from "../../product-card/product-card.component";
// Styles:
import { CategoryContainer, CategoryTitle } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};
export default Category;
