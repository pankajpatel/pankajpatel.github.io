import React from "react";
import styled from "styled-components";
import GithubSvg from "../images/svg/github.svg";
import LinkedinSvg from "../images/svg/linkedin.svg";
import TwitterSvg from "../images/svg/twitter.svg";
import InstagramSvg from "../images/svg/instagram.svg";
import NetlifySvg from "../images/svg/netlify-for-dark.svg";

import metadata from "../data/config";

const NetlifyLogo = styled.a`
  display: inline-block;
  margin: 1rem 0;
  text-align: center;
  text-decoration: none;
  border-bottom: none;
  transition: all ease 500ms;

  &:hover {
    transform: rotateY(360deg);
  }
`;
const FooterContainer = styled.footer`
  text-align: center;
  font-size: 0.8rem;
  margin: 2rem 0;
`;
const Icons = styled.ul`
  cursor: default;
  list-style: none;
  padding-left: 0;

  & li {
    display: inline-block;
    padding: 0 0.75em 0 0;
  }

  & li:last-child {
    padding-right: 0;
  }

  & li a {
    --dimension: 3rem;
    display: inline-block;
    height: var(--dimension);
    line-height: var(--dimension);
    text-align: center;
    width: var(--dimension);
    transition: all ease 200ms;
  }

  & li a:hover {
    transform: scale(1.3);
  }

  & li a:active {
    background-color: rgba(255, 255, 255, 0.175);
  }

  svg {
    width: 100%;
    height: 100%;
    & path {
      stroke: #fff;
      stroke-width: 8px;
    }
  }
`;

const Footer = () => (
  <FooterContainer>
    <Icons>
      <li>
        <a href={metadata.socialLinks.linkedin}>
          <LinkedinSvg />
        </a>
      </li>
      <li>
        <a href={metadata.socialLinks.github}>
          <GithubSvg />
        </a>
      </li>
      <li>
        <a href={metadata.socialLinks.twitter}>
          <TwitterSvg />
        </a>
      </li>
      <li>
        <a href={metadata.socialLinks.instagram}>
          <InstagramSvg />
        </a>
      </li>
    </Icons>
    <NetlifyLogo href="https://netlify.com">
      <NetlifySvg />
    </NetlifyLogo>
  </FooterContainer>
);

export default Footer;
