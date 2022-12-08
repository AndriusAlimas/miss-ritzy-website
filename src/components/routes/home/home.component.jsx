import { Outlet } from "react-router-dom";
import CategoriesList from "../../categories-list/categories-list.component";
import { categories_list } from "../../../constants/constants";
const Home = () => {
  return (
    <div>
      <CategoriesList categories_list={categories_list} />
    </div>
  );
};

export default Home;
