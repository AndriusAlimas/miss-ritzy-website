import CategoriesList from "./components/categories-list/categories-list.component";
import { categories_list } from "./constants/constants";
const App = () => {
  return <CategoriesList categories_list={categories_list} />;
};

export default App;
