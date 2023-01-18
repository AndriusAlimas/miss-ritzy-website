// Constants:
import { BUTTON_TYPES_CLASSES } from "../../utils/constants/constants";
// Styles:
import "./button.styles.scss";
const Button = ({ children, buttonType, buttonOptions }) => {
  return (
    <button
      className={`button-container ${
        BUTTON_TYPES_CLASSES[buttonType] ? BUTTON_TYPES_CLASSES[buttonType] : ""
      } `}
      {...buttonOptions}
    >
      {children}
    </button>
  );
};

export default Button;
