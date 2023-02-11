import { createContext, useReducer, useState } from "react";
// Import utils:
import { addOrRemoveCartItem } from "../utils/cartUpdateHelper";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  removeItemToCart: () => null,
  cartCount: 0,
  cartTotal: 0,
});
// INITIAL STATE FOR THE REDUCER:
const INITIAL_STATE = {
  cartCount: 0,
  cartTotal: 0,
  cartItems: [],
  isCartOpen: false,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`unhandled type of ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { cartItems, cartCount, cartTotal } = state;

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch({
      type: "SET_CART_ITEMS",
      payload: {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      },
    });
  };
  const addItemToCart = (product) => {
    const newCartItems = addOrRemoveCartItem(cartItems, product, "add");
    updateCartItemsReducer(newCartItems);
  };
  const removeItemFromCart = (product) => {
    const newCartItems = addOrRemoveCartItem(cartItems, product, "remove");
    updateCartItemsReducer(newCartItems);
  };
  const clearItemFromCart = (product) => {
    const newCartItems = addOrRemoveCartItem(
      cartItems,
      product,
      "remove",
      true
    );
    updateCartItemsReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartCount,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
