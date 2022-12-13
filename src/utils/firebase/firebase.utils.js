import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

const auth = getAuth();
const db = getFirestore();
const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider);

// general user document create and save to db, depending on name second argument if its null that means using native provider
// so we capture from form field and save the displayName
const createUserDocument = async (userAuth, name) => {
  if (!userAuth) return;
  console.log(userAuth);
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  // if user data does not exist
  // create / set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { email } = userAuth;
    // if this native provider we need read display name from form we provide
    if (!userAuth.displayName) {
      userAuth.displayName = name;
    }

    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName: userAuth.displayName,
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

// this login user with google and create user in db
export const logGoogleUser = async () => {
  const { user } = await signInWithGooglePopUp();
  await createUserDocument(user);
};
// Native Provider create with email and password
export const createAuthUserWithEmailAndPassword = async (
  displayName,
  email,
  password
) => {
  if (!email || !password) return;
  console.log(displayName);
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await createUserDocument(user, displayName);
};
