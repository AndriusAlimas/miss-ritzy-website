import { async } from "@firebase/util";
import { useState } from "react";
import { DEFAULT_FORM_FIELDS } from "../../constants/constants";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(DEFAULT_FORM_FIELDS);
  // destructuring:
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);
  // event handler
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { password, confirmPassword, displayName } = event.target;
    if (password.value === confirmPassword.value) {
      await createAuthUserWithEmailAndPassword(
        displayName.value,
        email,
        password.value
      );
    }
  };
  return (
    <div>
      <h1>Sign Up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          required
        />
        <label>Email</label>
        <input
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />
        <label>Password</label>
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />
        <label>Confirm Password</label>
        <input
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default SignUpForm;
