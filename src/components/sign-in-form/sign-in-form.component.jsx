import { useState } from "react";
import { DEFAULT_FORM_FIELDS } from "../../constants/constants";
import { signInWithGoogle,signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
// Custom Components
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
// Styles
import "./sign-in-form.styles.scss";

const SignInForm = () => {
  const [formFields, setFormFields] = useState(DEFAULT_FORM_FIELDS);
  // destructuring:
  const { email, password } = formFields;
  // event handler
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(email,password);
    } catch (error) {}
  };

  const resetFormFields = () => {
    setFormFields(DEFAULT_FORM_FIELDS);
  };
  return (
    <div className="sign-up-container">
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
          <Button buttonType="google" buttonOptions={{ onClick: signInWithGoogle}}  >Google Sign In</Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
