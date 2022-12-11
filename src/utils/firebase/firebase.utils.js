import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

const auth = getAuth();
const db = getFirestore();
const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

const createUserDocumentFromGoogleAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  // if user data does not exist
  // create / set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating the user ", error.message);
    }
  }
  // if user data exists

  // return userDocRef
  return userDocRef;
};

export const logGoogleUser = async () => {
  const { user } = await signInWithGooglePopUp();
  const userDocRef = await createUserDocumentFromGoogleAuth(user);
};
