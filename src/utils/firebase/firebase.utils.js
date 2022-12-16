import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword
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

// general user document create and save to db, depending on additionalInformation second argument if its null that means using native provider
// so we capture from form field and save the displayName
const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
  if (!userAuth) return;
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
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error creating the user ", error);
    }
  }
  // if user data exists

  // return userDocRef
  return userDocRef;
};

// this login user with google and create user in db
export const signInWithGoogle = async () => {
  const { user } = await signInWithGooglePopUp();
  await createUserDocumentFromAuth(user);
};
// Native Provider create with email and password
export const createAuthUserWithEmailAndPassword = async (
  displayName,
  email,
  password
) => {
  if (!email || !password)  return;
  

  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  await createUserDocumentFromAuth(user, { displayName });
  alert("User " + displayName + " was created!");
};

export const signInAuthUserWithEmailAndPassword = async (email, password) =>{
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth,email,password);
}
