// React:
import { useState } from "react";
// Constants:
import { DEFAULT_FORM_FIELDS } from "../../utils/constants/constants.js";
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
import "./sign-in-form.styles.scss";

const SignInForm = () => {
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
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
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
        <div className="buttons-container">
          <Button buttonOptions={{ type: "submit" }}>Sign In</Button>
          <Button
            buttonType="google"
            buttonOptions={{ onClick: signInWithGoogle, type: "button" }}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
