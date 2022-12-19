import { useState, useContext } from "react";
import { UserContext } from "../../contexts/user.context";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import { DEFAULT_FORM_FIELDS } from "../../constants/constants";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { resetFormFields } from "../../utils/forms/forms.utils";

import "./sign-up-form.styles.scss";

const SignUpForm = () => {
  const { setCurrentUser } = useContext(UserContext);
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
      const user = await createAuthUserWithEmailAndPassword(
        displayName,
        email,
        password
      );
      setCurrentUser(user);
      resetFormFields(setFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      }
      console.log(error);
    }
  };

  return (
    <div className="sign-up-container">
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
    </div>
  );
};
export default SignUpForm;
