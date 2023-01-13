import { Routes, Route } from "react-router-dom";
import Authentication from "./components/routes/authentication/authentication.component";
import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component";
import Shop from "./components/routes/shop/shop.component";
import { ProductsProvider } from "./contexts/product.context";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route
          path="/shop"
          element={
            <ProductsProvider>
              <Shop />
            </ProductsProvider>
          }
        />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
