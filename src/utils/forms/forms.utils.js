import { DEFAULT_FORM_FIELDS } from "../../constants/constants";
import { signOutUser } from "../firebase/firebase.utils";
export const resetFormFields = (setFormFields) =>
  setFormFields(DEFAULT_FORM_FIELDS);

export const signOutHandler = async () => {
  await signOutUser();
};
