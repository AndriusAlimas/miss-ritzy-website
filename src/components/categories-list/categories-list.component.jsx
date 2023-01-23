// Components:
import CategoryItem from "../category-item/category-item.component";
// Styles:
import { CategoriesContainer } from "./categories-list.styles";
const CategoriesList = ({ categories_list }) => (
  <CategoriesContainer>
    {categories_list.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}
  </CategoriesContainer>
);
export default CategoriesList;
