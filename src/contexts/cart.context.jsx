// Import packages:
import { createContext, useReducer } from "react";
// Import utils:
import { addOrRemoveCartItem } from "../utils/cartUpdateHelper";
import { createAction } from "../utils/reducer/reducer.util";
// Import constants:
import { USER_ACTION_TYPES } from "../utils/constants/constants";
const { SET_CART_ITEMS, SET_IS_CART_OPEN } = USER_ACTION_TYPES;

// INITIAL STATE FOR THE REDUCER:
const INITIAL_STATE = {
  cartCount: 0,
  cartTotal: 0,
  cartItems: [],
  isCartOpen: false,
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addItemToCart: () => null,
  removeItemToCart: () => null,
  cartCount: 0,
  cartTotal: 0,
});

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`unhandled type of ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { cartItems, cartCount, cartTotal, isCartOpen } = state;

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch(
      createAction(SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      })
    );
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
  const setIsCartOpen = (bool) => {
    dispatch(createAction(SET_IS_CART_OPEN, bool));
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
