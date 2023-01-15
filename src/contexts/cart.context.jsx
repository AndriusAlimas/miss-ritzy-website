import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if carItems contains productToAdd
  // if found, increament quantity
  // return new array with modified cartItems/ new cart items
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([{
    "id": 1,
    "name": "Brown Brim",
    "imageUrl": "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    "price": 25
  },
  {
    "id": 2,
    "name": "Blue Beanie",
    "imageUrl": "https://i.ibb.co/ypkgK0X/blue-beanie.png",
    "price": 18
  },]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, setCartItems };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
