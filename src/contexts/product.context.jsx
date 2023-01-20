import { createContext, useState, useEffect } from "react";
import PRODUCTS from "../data/shop-data.json";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
// as the actual value you want to access
export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", PRODUCTS, "title");
  // }, []);
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
