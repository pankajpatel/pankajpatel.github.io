import styled from "styled-components";

export const Articles = styled.div`
  position: relative;
  max-width: 480px;
  margin: 0 auto;
  &:before {
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    border-left: 1px dashed #ccc;
    content: "";
    height: 100%;
    z-index: -1;
  }
`;
