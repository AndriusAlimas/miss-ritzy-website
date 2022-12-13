import { useState } from "react";
import { DEFAULT_FORM_FIELDS } from "../../constants/constants";
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(DEFAULT_FORM_FIELDS);
  // destructuring:
  const { displayName, email, password, confirmPassword } = formFields;

  // event handler
  const handleChange = ({ target }) => {
    const { name } = target;
    console.log(name);
  };
  return (
    <div>
      <h1>Sign Up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input
          type="text"
          onChange={handleChange}
          name="displayName"
          required
        />
        <label>Email</label>
        <input type="email" onChange={handleChange} name="email" required />
        <label>Password</label>
        <input
          type="password"
          onChange={handleChange}
          name="password"
          required
        />
        <label>Confirm Password</label>
        <input
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default SignUpForm;
