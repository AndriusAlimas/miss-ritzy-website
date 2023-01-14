// React
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

// Contexts
import { UserContext } from "../../../contexts/user.context";
import { CartContext } from "../../../contexts/cart.context";

// Firebase
import { signOutUser } from "../../../utils/firebase/firebase.utils";

// Components
import { ReactComponent as Logo } from "../../../assets/svg/Logo.svg";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

// Styles
import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
