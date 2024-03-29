import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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

// we can add any collection structure with documents objects to our firebase
// usually we will use this once to initialize automatically if we need data!!
export const addCollectionAndDocuments = async (
  collectionKey,
  documentToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  documentToAdd.forEach((documentObject) => {
    const docRef = doc(collectionRef, documentObject[field].toLowerCase());
    batch.set(docRef, documentObject);
  });

  await batch.commit();
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};
export const getCategories = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoriesList = querySnapshot.docs.map((item) => {
    const { title, categoryImage, route } = item.data();

    return { title, categoryImage, route };
  }, {});

  return categoriesList;
};

const signInWithGooglePopUp = async () =>
  await signInWithPopup(auth, googleProvider);

// general user document create and save to db, depending on additionalInformation second argument if its null that means using native provider
// so we capture from form field and save the displayName
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
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

  return userDocRef;
};

// this login user with google and create user in db
export const signInWithGoogle = async () => {
  await signInWithGooglePopUp();
};
// Native Provider create with email and password
export const createAuthUserWithEmailAndPassword = async (
  displayName,
  email,
  password
) => {
  if (!email || !password) return;

  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  alert("User " + displayName + " was created!");
  await createUserDocumentFromAuth(user, { displayName });
  return user;
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
