import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 66%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  text-align: center;
  @media screen and (max-width: 600px) {
    width: 90%;
    margin: 1rem;
  }
`;
export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  @media screen and (max-width: 600px) {
    font-size: 0.6rem;
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`;
export const Total = styled.div`
  margin-top: 2rem;
  margin-left: auto;
  font-size: 2.2rem;
  @media screen and (max-width: 600px) {
    margin-top: 1.2rem;
    font-size: 1.1rem;
  }
`;
