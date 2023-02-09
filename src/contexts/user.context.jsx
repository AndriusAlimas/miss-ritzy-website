// React
import { createContext, useEffect, useReducer } from "react";
import { USER_ACTION_TYPES } from "../utils/constants/constants";

// Firebase
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";
// Actions for the users:
const { SET_CURRENT_USER } = USER_ACTION_TYPES;
// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

// Initial State for Reducer:
const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
  const { currentUser } = state;

  const setCurrentUser = (user) => {
    dispatch({ type: SET_CURRENT_USER, payload: user });
  };
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      user && createUserDocumentFromAuth(user);

      setCurrentUser(user);
    });

    return unsubscribe; // cleanup
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
