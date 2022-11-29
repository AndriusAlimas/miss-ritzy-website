import "./App.css";
import no_image from "./assets/img/no_image.png";
const App = () => {
  const categories = [
    {
      id: 1,
      title: "HATS",
    },
    {
      id: 2,
      title: "JACKETS",
    },
    {
      id: 3,
      title: "SNEAKERS",
    },
    {
      id: 4,
      title: "WOMANS",
    },
    {
      id: 5,
      title: "MANS",
    },
  ];
  const SHOP_NOW = "Shop Now";
  return (
    <div className="categories-categories d-flex justify-content-center">
      {categories.map(({ title }) => {
        return (
          <div className="category-container">
            <img src={no_image} alt="product_image" className="no-image" />
            <div className="category-container-body">
              <h2>{title}</h2>
              <p>{SHOP_NOW}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
