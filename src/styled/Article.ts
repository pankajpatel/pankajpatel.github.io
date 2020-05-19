import styled from "styled-components";

export const ImageContainer = styled.div`
  margin-right: 0.5rem;
  & img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
`;
export const Description = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  margin: 0 !important;
  background: rgba(50, 50, 50, 0.95);
  transition: all ease 200ms;
  opacity: 0;

  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  text-align: center;
}
`;
export const Article = styled.article`
  padding: 0.5rem 1rem;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
  border: 1px solid rgba(100, 100, 100, 0.7);
  background: rgba(40, 40, 40, 1);
  border-radius: 0.25rem;
  position: relative;
  overflow: hidden;
  text-align: center;

  & > * {
    flex: 1 auto;
    margin: 0.5rem auto;
    margin-bottom: 0.5rem;
  }

  & header > * {
    padding-bottom: 0.5em;
    line-height: 1.2;
  }

  ${ImageContainer} {
    min-width: 60px;
    max-width: 60px;
  }

  &:hover {
    & ${Description} {
      top: 0%;
      opacity: 1;
    }
  }
`;
