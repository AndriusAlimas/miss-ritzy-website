export const SHOP_NOW = "Shop Now";
export const SIGN_IN = "SIGN IN";
export const SIGN_OUT = "SIGN OUT";
export const ADD_TO_CART = "Add to cart";
export const SIGN_FORM_LABELS = {
  HAVE_ACCOUNT: "Already have an account?",
  DONT_HAVE_ACCOUNT: "Sign in with your email and password",
};
export const BUTTONS_LABELS = {
  GOOGLE: "Google Sign In",
  SIGN_UP: "Sign Up",
};
export const PRODUCT_HEADERS = {
  PRODUCT: "Product",
  DESCRIPTION: "Description",
  QUANTITY: "Quantity",
  PRICE: "Price",
  REMOVE: "Remove",
};
export const ENTITY_ICONS = {
  LEFT_ARROW: String.fromCharCode(`10096`),
  RIGHT_ARROW: String.fromCharCode(`10095`),
  REMOVE: String.fromCharCode("10005"),
};
export const DEFAULT_FORM_FIELDS = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};
export const CATEGORIES_LIST = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "shop/mens",
  },
];

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};
