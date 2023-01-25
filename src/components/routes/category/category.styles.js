import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  margin: 0 6vw;
  @media screen and (max-width: 390px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 2rem;
  }
  @media screen and (min-width: 420px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
    row-gap: 2.2rem;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    margin: 0 auto;
    column-gap: 7rem;
    row-gap: 2.5rem;
  }
`;
export const CategoryTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1.7rem;
`;
