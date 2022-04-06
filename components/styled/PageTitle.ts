import styled from "styled-components";

export const PageTitle = styled.h2`
  font-size: 2rem;
  margin: 1rem 1rem 4rem 1rem;
  display: inline-block;
  color: #333;
  background-image: url(/img/hand-drawn-stroke.svg);
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  width: 420px;
  height: 90px;
  line-height: 90px;

  @media (max-width: 500px) {
    width: 300px;
    height: 80px;
    line-height: 80px;
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
  }
}
`;
