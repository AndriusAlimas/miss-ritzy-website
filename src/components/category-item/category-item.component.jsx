// Constants:
import { SHOP_NOW } from "../../utils/constants/constants";
// Styles:
import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="category-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title.toUpperCase()}</h2>
        <p>{SHOP_NOW}</p>
      </div>
    </div>
  );
};
export default CategoryItem;
