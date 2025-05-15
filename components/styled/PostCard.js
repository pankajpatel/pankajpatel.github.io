"use client";

import Link from "next/link";
import styled from "styled-components";
import { LabelStyles, Label } from "./Label";

export const NoDecorationLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;
export const CardTitle = styled.h1`
  font-size: 1.6rem;
  margin: 0.25em 0 0.5em;
  line-height: 1.15;
  font-weight: 500;
  text-rendering: optimizeLegibility;
`;
export const NoDecorationTags = styled(Link)`
  ${LabelStyles}
`;
export const PostTextContainer = styled.div`
  font-size: 1.15rem;
  padding: 25px 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${Label},
  ${NoDecorationTags} {
    margin-bottom: 15px;
  }

  ${(props) =>
    props.large
      ? `
    padding-left: 25px;
    padding-right: 25px;
  `
      : ""}
`;
export const PostCardImageLink = styled(NoDecorationLink)`
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 5px;
`;
export const PostCardImage = styled.img`
  width: 100%;
  max-height: 220px;
  -o-object-fit: cover;
  object-fit: cover;
  background-color: #c5d2d9;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
`;
export const Article = styled.article`
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  margin: 0 20px 20px;
  transition: all 0.5s ease;
  ${(props) =>
    props.large &&
    `
    @media (min-width: 795px) {
      flex: 1 1 100%;
      flex-direction: row;
      margin-bottom: 50px;
      min-height: 350px;

      ${PostCardImage} {
        position: absolute;
        width: 100%;
        height: 100%;
      }

      ${PostCardImageLink} {
        position: relative;
        flex: 1 1 auto;
        border-radius: 5px;
      }

      ${PostTextContainer} {
        flex: 0 1 357px;
        padding: 30px 40px;
      }

      p {
        line-height: 1.55em;
        font-size: 1.25rem;
      }

      ${CardTitle} {
        font-size: 1.8rem;
      }

    }
  `}
`;

const css = `
@media (min-width: 795px) {
  .post-card-large .post-card-content-link {
    padding: 30px 40px 0;
  }

  .post-card-large .post-card-meta {
    padding: 0 40px 30px;
  }
}
`;
