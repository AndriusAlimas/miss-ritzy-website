// Routes:
import { Routes, Route } from "react-router-dom";
// Components:
import CategoriesPreview from "../categories-preview/categories-preview.component";
// Styles:
import "./shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
    </Routes>
  );
};
export default Shop;
