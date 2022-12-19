import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { ReactComponent as Logo } from "../../../assets/svg/Logo.svg";
import { UserContext } from "../../../contexts/user.context";
import { signOutHandler } from "../../../utils/forms/forms.utils";
import "./navigation.styles.scss";
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            SHOP
          </Link>
          {currentUser ? (
            <span
              className="nav-link"
              onClick={() => {
                signOutHandler();
                setCurrentUser(null);
              }}
            >
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to={"/auth"}>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
