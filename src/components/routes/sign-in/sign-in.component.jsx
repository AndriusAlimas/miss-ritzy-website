import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  logGoogleUser,
  logGoogleRedirectUser,
} from "../../../utils/firebase/firebase.utils";
import { auth } from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect(
    () => async () => {
      const response = await getRedirectResult(auth);
      console.log(response);
    },
    []
  );
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Log In With Google</button>
      <button onClick={logGoogleRedirectUser}>
        Log In With Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
