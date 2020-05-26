// Source: https://github.com/horacioh/gatsby-theme-instagram
import React, { SVGProps } from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { IInstagramCard } from "../types";

const HeartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path d="M12 4.435C10.011-.964 0-.162 0 8.003 0 12.071 3.06 17.484 12 23c8.94-5.516 12-10.929 12-14.997C24-.115 14-.996 12 4.435z" />
    </svg>
  );
};

const CommentIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path d="M24 9.874C24 4.42 18.627 0 12 0S0 4.42 0 9.874c0 4.512 3.678 8.317 8.701 9.496L12 24l3.299-4.63C20.322 18.19 24 14.385 24 9.874z" />
    </svg>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: row;
`;
const Image = styled(Img)`
  max-width: 100%;
  border-radius: 0.25rem;
`;
const HoverBox = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  transition: opacity 0.25s ease 0s;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
`;
const Post = styled.a`
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  padding: 0.15rem;
  text-decoration: none;
  border-bottom: none;

  &:hover {
    cursor: pointer;
    & ${HoverBox} {
      opacity: 1;
    }
  },
`;
const Text = styled.span`
  margin: 0px;
  padding: 0em;
  font-weight: bold;
  color: white;
  line-height: 1;
  margin: 0 0.5em;
`;

const InstagramCard = ({ id, likes, comments, localFile }: IInstagramCard) => (
  <Post href={`https://www.instagram.com/p/${id}/`} target="_blank">
    <HoverBox>
      {likes && (
        <Flex>
          <HeartIcon fill="white" />
          <Text>{likes}</Text>
        </Flex>
      )}{" "}
      {comments && (
        <Flex>
          <CommentIcon fill="white" />
          <Text>{comments}</Text>
        </Flex>
      )}
    </HoverBox>
    <Image fluid={localFile.childImageSharp.fluid} />
  </Post>
);

export default InstagramCard;
