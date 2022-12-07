import CategoryItem from "../category-item/category-item.component";
import "./categories-list.styles.scss";
const CategoriesList = ({ categories_list }) => (
  <div className="categories-container">
    {categories_list.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}
  </div>
);

export default CategoriesList;
