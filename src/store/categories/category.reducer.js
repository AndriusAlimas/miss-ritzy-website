import CATEGORIES_ACTION_TYPES from "./category.types";
const { SET_CATEGORIES_MAP } = CATEGORIES_ACTION_TYPES;

// Initial State for Reducer:
const CATEGORIES_INITIAL_STATE = {
  categoriesMap: {},
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CATEGORIES_MAP:
      return {
        ...state,
        categoriesMap: payload,
      };
    default:
      return state;
  }
};
