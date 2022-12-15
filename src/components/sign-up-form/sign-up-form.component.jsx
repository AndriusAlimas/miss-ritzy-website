import { useState } from "react";
import { DEFAULT_FORM_FIELDS } from "../../constants/constants";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(DEFAULT_FORM_FIELDS);
  // destructuring:
  const { displayName, email, password, confirmPassword } = formFields;

  // event handler
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
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      }
    }
  };

  const resetFormFields = () => {
    setFormFields(DEFAULT_FORM_FIELDS);
  };
  return (
    <div>
      <h1>Sign Up with your email and password</h1>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default SignUpForm;
