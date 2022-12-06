import CategoryItem from "./components/category-item/category-item.component";
import { categories_list } from "./constants/constants";
const App = () => {
  return (
    <div className="categories-container">
      {categories_list.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default App;
