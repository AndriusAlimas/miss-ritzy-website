import styled from "styled-components";

export const SignInContainer = styled.div`
  @media screen and (max-width: 1000px) {
    width: 90vw;
  }
  @media screen and (min-width: 1000px) {
    width: 34vw;
    margin: 1.2rem 2.5rem;
  }
  h2 {
    margin: 1.4rem 0;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
