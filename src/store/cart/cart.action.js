import { createAction } from "../../utils/reducer/reducer.util";
import { addOrRemoveCartItem } from "../../utils/cartUpdateHelper";
import CART_ACTION_TYPES from "./cart.types";

const { SET_IS_CART_OPEN, SET_CART_ITEMS } = CART_ACTION_TYPES;
export const setIsCartOpen = (bool) => createAction(SET_IS_CART_OPEN, bool);

export const setCartItems = (cart) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cart);

export const addItemToCart = (cartItems, product) => {
  const newCartItems = addOrRemoveCartItem(cartItems, product, "add");
  return createAction(SET_CART_ITEMS, newCartItems);
};
export const removeItemFromCart = (cartItems, product) => {
  const newCartItems = addOrRemoveCartItem(cartItems, product, "remove");
  return createAction(SET_CART_ITEMS, newCartItems);
};
export const clearItemFromCart = (cartItems, product) => {
  const newCartItems = addOrRemoveCartItem(cartItems, product, "remove", true);
  return createAction(SET_CART_ITEMS, newCartItems);
};
