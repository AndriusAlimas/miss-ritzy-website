import "./App.css";
import no_image from "./assets/img/no_image.png";
const App = () => {
  const SHOP_NOW = "Shop Now";
  return (
    <div className="categories-categories d-flex justify-content-center">
      <div className="category-container">
        <img src={no_image} alt="product_image" className="no-image" />
        <div className="category-container-body">
          <h2>HATS</h2>
          <p>{SHOP_NOW}</p>
        </div>
      </div>
      <div className="category-container">
        <img src={no_image} alt="product_image" className="no-image" />
        <div className="category-container-body">
          <h2>JACKETS</h2>
          <p>{SHOP_NOW}</p>
        </div>
      </div>
      <div className="category-container">
        <img src={no_image} alt="product_image" className="no-image" />
        <div className="category-container-body">
          <h2>SNEAKERS</h2>
          <p>{SHOP_NOW}</p>
        </div>
      </div>
      <div className="category-container">
        <img src={no_image} alt="product_image" className="no-image" />
        <div className="category-container-body">
          <h2>WOMANS</h2>
          <p>{SHOP_NOW}</p>
        </div>
      </div>
      <div className="category-container">
        <img src={no_image} alt="product_image" className="no-image" />
        <div className="category-container-body">
          <h2>MENS</h2>
          <p>{SHOP_NOW}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
