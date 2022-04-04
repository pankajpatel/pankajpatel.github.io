import styled, { css } from "styled-components";

export const flexCss = css`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
  padding: 40px 0 0 0;
`;

export const gridCss = css`
  display: grid;
  justify-content: space-between;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 980px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const PostFeed = styled.section`
  ${(props) => (props.flex ? flexCss : gridCss)}
`;
