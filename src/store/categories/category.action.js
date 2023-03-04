import { createAction } from "../../utils/reducer/reducer.util";
import CATEGORIES_ACTION_TYPES from "./category.types";

export const setCategoriesMap = (categoryMap) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoryMap);
