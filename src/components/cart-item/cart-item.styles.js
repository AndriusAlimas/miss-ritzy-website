import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 5rem;
  margin-bottom: 0.9rem;
`;

export const CartItemImage = styled.img`
  width: 30%;
`;
export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0.625rem 1.25rem;
`;

export const ItemName = styled.span`
  font-size: 1rem;
`;
export const Price = styled(ItemName)`
  margin-top: 0.25rem;
`;
