import styled, { css } from "styled-components";

export const LabelStyles = css`
  margin: 0 0 0.2em;
  font-size: 0.875rem;
  line-height: 1;
  font-weight: 500;
  color: var(--darkgrey);
  padding: 0.5em;
  display: inline-block;
  border-radius: 3px;
  background: var(--whitegrey);
  margin-bottom: 1rem;
  text-transform: capitalize;
  text-decoration: none;
  border: 1px solid transparent;
  transition: all 0.2s ease;
  border: 1px solid var(--whitegrey);

  ${(props) =>
    props.noHover
      ? ``
      : `
    &:hover {
      text-decoration: none;
      color: var(--whitegrey);
      border: 1px solid var(--blue);
      background: color(var(--blue) a(25%)) !important;
    }
  `}

  @media (prefers-color-scheme: dark) {
    background: #333;
    color: #ccc;
    border: 1px solid #333;
  }
`;

export const Label = styled.span`
  ${LabelStyles}
`;

export const PrimaryTag = styled.span`
  ${LabelStyles}
  font-size: 1rem;
`;

export default Label;
