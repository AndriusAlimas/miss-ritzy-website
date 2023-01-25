// React:
import { useState } from "react";
// Constants:
import {
  BUTTONS_LABELS,
  BUTTON_TYPE_CLASSES,
  DEFAULT_FORM_FIELDS,
  SIGN_IN_FORM_LABELS,
} from "../../utils/constants/constants.js";
// Components:
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
// Utils:
import { resetFormFields } from "../../utils/forms/forms.utils";
import {
  signInWithGoogle,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
// Styles:
import { ButtonsContainer, SignInContainer } from "./sign-in-form.styles.js";

const SignInForm = () => {
  const { HAVE_ACCOUNT, DONT_HAVE_ACCOUNT } = SIGN_IN_FORM_LABELS;
  const [formFields, setFormFields] = useState(DEFAULT_FORM_FIELDS);
  const { email, password } = formFields;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields(setFormFields);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          console.log("Error ", error.code);
      }
    }
  };
  return (
    <SignInContainer>
      <h2>{HAVE_ACCOUNT}</h2>
      <span>{DONT_HAVE_ACCOUNT}</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            onChange: handleChange,
            name: "email",
            value: email,
            required: true,
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            onChange: handleChange,
            name: "password",
            value: password,
            required: true,
          }}
        />
        <ButtonsContainer>
          <Button buttonOptions={{ type: "submit" }}>Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            buttonOptions={{ onClick: signInWithGoogle, type: "button" }}
          >
            {BUTTONS_LABELS.GOOGLE}
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};
export default SignInForm;
