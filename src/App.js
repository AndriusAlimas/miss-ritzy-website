import { Routes, Route } from "react-router-dom";
import Authentication from "./components/routes/authentication/authentication.component";
import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component";

const Shop = () => {
  return (
    <div>
      <h1>Shop Page</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
