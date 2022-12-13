import { useState } from "react";
import { DEFAULT_FORM_FIELDS } from "../../constants/constants";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
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
