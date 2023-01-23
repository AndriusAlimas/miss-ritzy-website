// React
import { useContext } from "react";
import { Outlet } from "react-router-dom";

// Contexts
import { UserContext } from "../../../contexts/user.context";
import { CartContext } from "../../../contexts/cart.context";

// Constants:
import { SIGN_OUT } from "../../../utils/constants/constants";

// Firebase
import { signOutUser } from "../../../utils/firebase/firebase.utils";

// Components
import { ReactComponent as Logo } from "../../../assets/svg/Logo.svg";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

// Styles
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles.js";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as={`span`} onClick={signOutUser}>
              {SIGN_OUT}
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};
export default Navigation;
