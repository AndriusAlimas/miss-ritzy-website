// React:
import { useState } from "react";
// Constants:
import { DEFAULT_FORM_FIELDS } from "../../utils/constants/constants";
// Components:
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
// Utils:
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { resetFormFields } from "../../utils/forms/forms.utils";

// Styles:
import { SignUpContainer } from "./sign-up-form.styles";

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(DEFAULT_FORM_FIELDS);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password Do Not Match!");
      return;
    }
    try {
      await createAuthUserWithEmailAndPassword(displayName, email, password);

      resetFormFields(setFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      }
      console.log(error);
    }
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            type: "text",
            onChange: handleChange,
            name: "displayName",
            value: displayName,
            required: true,
          }}
        />

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
        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: "password",
            onChange: handleChange,
            name: "confirmPassword",
            value: confirmPassword,
            required: true,
          }}
        />
        <Button buttonOptions={{ type: "submit" }}>Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};
export default SignUpForm;
