// Constants:
import { BUTTON_TYPE_CLASSES } from "../../utils/constants/constants";
// Styles:
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, buttonOptions }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...buttonOptions}>{children}</CustomButton>;
};

export default Button;
