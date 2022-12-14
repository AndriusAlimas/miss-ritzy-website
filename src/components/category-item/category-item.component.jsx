import "./category-item.styles.scss";
import { SHOP_NOW } from "../../constants/constants";
const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title.toUpperCase()}</h2>
        <p>{SHOP_NOW}</p>
      </div>
    </div>
  );
};
export default CategoryItem;
