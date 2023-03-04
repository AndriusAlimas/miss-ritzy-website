// React:
import { useNavigate } from "react-router-dom";
// Constants:
import { SHOP_NOW } from "../../utils/constants/constants";
// Styles:
import {
  CategoryItemContainer,
  BackgroundImage,
  Body,
} from "./category-item.styles";
const CategoryItem = ({ category }) => {
  const { title, categoryImage, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <CategoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={categoryImage} />
      <Body>
        <h2>{title}</h2>
        <p>{SHOP_NOW}</p>
      </Body>
    </CategoryItemContainer>
  );
};
export default CategoryItem;
