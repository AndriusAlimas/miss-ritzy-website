// React
import { createContext, useReducer } from "react";

// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// export const UserProvider = ({ children }) => {
//   // const [currentUser, setCurrentUser] = useState(null);
//   // const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
//   const { currentUser } = state;

//   const value = { currentUser, setCurrentUser };

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
