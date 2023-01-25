import styled from "styled-components";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 6rem;
  right: 3rem;
  z-index: 5;

  ${BaseButton},${GoogleSignInButton},${InvertedButton} {
    margin-top: auto;
  }

  @media screen and (max-width: 400px) {
    width: fit-content;
    top: 4.4rem;
    left: 3.8rem;
  }
`;
export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
