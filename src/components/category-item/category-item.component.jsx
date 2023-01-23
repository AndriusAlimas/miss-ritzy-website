// Constants:
import { SHOP_NOW } from "../../utils/constants/constants";
// Styles:
import {
  CategoryItemContainer,
  BackgroundImage,
  Body,
} from "./category-item.styles";
const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <CategoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title.toUpperCase()}</h2>
        <p>{SHOP_NOW}</p>
      </Body>
    </CategoryItemContainer>
  );
};
export default CategoryItem;
