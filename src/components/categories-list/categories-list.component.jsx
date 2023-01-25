// Components:
import CategoryItem from "../category-item/category-item.component";
// Constants:
import { CATEGORIES_LIST } from "../../utils/constants/constants";

// Styles:
import { CategoriesContainer } from "./categories-list.styles";
const CategoriesList = () => (
  <CategoriesContainer>
    {CATEGORIES_LIST.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}
  </CategoriesContainer>
);
export default CategoriesList;
