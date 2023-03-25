import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.util";
import CATEGORIES_ACTION_TYPES from "./category.types";
const {
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_FAILED,
  FETCH_CATEGORIES_SUCCESS,
} = CATEGORIES_ACTION_TYPES;

export const fetchCategoriesStart = () => createAction(FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error) =>
  createAction(FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
