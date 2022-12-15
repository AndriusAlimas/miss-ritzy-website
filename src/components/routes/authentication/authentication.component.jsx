import { logGoogleUser } from "../../../utils/firebase/firebase.utils";
import SignUpForm from "../../sign-up-form/sign-up-form.component";

const Authentication = () => {
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Log In With Google</button>
      <SignUpForm />
    </div>
  );
};

export default Authentication;
