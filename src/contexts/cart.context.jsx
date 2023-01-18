import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd, subtract) => {
  let quantity = 1;
  if (subtract === undefined) {
    subtract = false;
  } else {
    quantity = -1;
  }
  // subtract = subtract === undefined && false;
  console.log(subtract);
  // find if carItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem && existingCartItem.quantity + quantity <= 0) {
    return cartItems.filter((item) => item.id !== existingCartItem.id);
  }
  // if found, increament quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? // ? existingCartItem.quantity + quantity <= 0 && // console.log(
          //   (cartItem = cartItems.filter(
          //     (item) => item.id !== existingCartItem.id
          //   ))
          // ),
          { ...cartItem, quantity: cartItem.quantity + quantity }
        : cartItem;
    });
  }

  // return new array with modified cartItems/ new cart items
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
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
  const addItemToCart = (productToAdd, subtract) => {
    setCartItems(addCartItem(cartItems, productToAdd, subtract));
    console.log(cartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
