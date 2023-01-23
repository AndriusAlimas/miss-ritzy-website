import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  border-bottom: #9b1df2 solid;
  height: 5rem;
  padding: 0;
  .logo {
    filter: invert(0.5) sepia(1) saturate(206) hue-rotate(281deg);
    width: 7.5rem;
  }
  @media screen and (max-width: 1000px) {
    padding: 0;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  margin: 0 0.5rem;
  @media screen and (max-width: 420px) {
    width: 6rem;
  }
`;
export const NavLinks = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 1rem 0 0 1rem;
  @media screen and (max-width: 420px) {
    margin: 0 0.29rem;
    font-size: 0.68rem;
  }
`;
export const NavLink = styled(Link)`
  cursor: pointer;
  color: purple;
  font-size: 1.2rem;
  margin: 0 1rem;
`;
