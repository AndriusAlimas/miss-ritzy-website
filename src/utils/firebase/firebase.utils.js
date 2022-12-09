import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6Jpz48aky9fNYgN64GKhGIgKgz37yFfo",
  authDomain: "miss-ritzy-website-db-98d4d.firebaseapp.com",
  projectId: "miss-ritzy-website-db-98d4d",
  storageBucket: "miss-ritzy-website-db-98d4d.appspot.com",
  messagingSenderId: "161889459178",
  appId: "1:161889459178:web:5f43813bb965eea1c2f093",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const logGoogleUser = async () => {
  const response = await signInWithGooglePopUp();
  console.log(response);
};

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
