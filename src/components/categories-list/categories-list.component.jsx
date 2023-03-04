// React:
import { useEffect, useState } from "react";
// FireBase:
import { getCategories } from "../../utils/firebase/firebase.utils";
// Components:
import CategoryItem from "../category-item/category-item.component";
// Styles:
import { CategoriesContainer } from "./categories-list.styles";

const CategoriesList = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const getCategoriesList = async () => {
    const categories = await getCategories();
    setCategoriesList(categories);
  };
  useEffect(() => {
    getCategoriesList();
  }, []);
  return (
    <CategoriesContainer>
      {categoriesList.length > 0 &&
        categoriesList.map((item, index) => (
          <CategoryItem key={index} category={item} />
        ))}
    </CategoriesContainer>
  );
};

export default CategoriesList;
