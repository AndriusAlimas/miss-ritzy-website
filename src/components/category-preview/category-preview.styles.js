import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  .title {
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
  }
  .preview {
    display: grid;
    row-gap: 1.5rem;
    @media screen and (max-width: 390px) {
      grid-template-columns: repeat(1, 1fr);
      row-gap: 2rem;
    }
    @media screen and (min-width: 420px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
      row-gap: 2.2rem;
    }
    @media screen and (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
      column-gap: 4rem;
      row-gap: 2.5rem;
    }
  }

  @media screen and (min-width: 3000px) {
    margin: 0 22vw;
  }
`;
