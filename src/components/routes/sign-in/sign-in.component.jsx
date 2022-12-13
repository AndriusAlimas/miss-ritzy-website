import { logGoogleUser } from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Log In With Google</button>
    </div>
  );
};

export default SignIn;
