import styled from "styled-components";

const SectionsImgStyled = styled.div<{ reverse: boolean }>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  align-items: center;

  img {
    width: 650px;
  }

  .description {
    font-size: 1em;
    width: 633px;
    padding: 50px 87px;
  }

  .description p {
    font-size: 1em;
  }
`;

export default SectionsImgStyled;