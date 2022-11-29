import "./categories.styles.scss";
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
    <div className="categories-container">
      {categories.map(({ title, id }) => {
        return (
          <div key={id} className="category-container">
            <div className="backround-image" />
            <div className="category-body-container">
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
