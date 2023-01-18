import { createContext, useEffect, useState } from "react";

// 1arg - array of objects cartItems
// 2arg - product to add or remove
// 3arg - "remove" string if remove "add" string if want to add
const addOrRemoveCartItem = (cartItems, product, addOrRemove) => {
  // check if its remove or add
  const quantity = addOrRemove === "add" ? 1 : -1;

  // find if carItems contains product
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  // only check if existing cart item you want to remove is reach 0
  if (existingCartItem && existingCartItem.quantity + quantity <= 0) {
    return cartItems.filter((item) => item.id !== existingCartItem.id);
  } 
  if(existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity + quantity }
        : cartItem;
    });
  }

  // return new array with modified cartItems/ new cart items
  return [...cartItems, { ...product, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  removeItemToCart: () => null,
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (product) => {
    setCartItems(addOrRemoveCartItem(cartItems, product, "add"));
  };
  const removeItemToCart = (product) => {
    setCartItems(addOrRemoveCartItem(cartItems, product, "remove"));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemToCart,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};