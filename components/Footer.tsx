"use client";

import Img from "next/image";
import styled from "styled-components";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";
import netlifySvg from "../images/svg/netlify-for-dark.svg";

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

const Image = styled(Img)`
  background-color: #fff;
  border-radius: 50%;
  padding: 1px;
  filter: opacity(0.7);
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
    --dimension: 70px;
    display: inline-block;
    height: var(--dimension);
    line-height: var(--dimension);
    text-align: center;
    width: var(--dimension);
    transition: all ease 200ms;
    border-bottom: none;
  }

  & li a:hover {
    transform: scale(1.2);
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
          <Image
            width={50}
            height={50}
            src={linkedin}
            alt="Find me on Linkedin"
          />
        </a>
      </li>
      <li>
        <a href={metadata.socialLinks.github}>
          <Image width={50} height={50} src={github} alt="Find me on Github" />
        </a>
      </li>
      <li>
        <a href={metadata.socialLinks.twitter}>
          <Image
            width={50}
            height={50}
            src={twitter}
            alt="Find me on Twitter"
          />
        </a>
      </li>
      <li>
        <a href={metadata.socialLinks.youtube}>
          <Image
            width={50}
            height={50}
            src={youtube}
            alt="Find me on Youtube"
          />
        </a>
      </li>
      <li>
        <a href={metadata.socialLinks.instagram}>
          <Image
            width={50}
            height={50}
            src={instagram}
            alt="Find me on Instagram"
          />
        </a>
      </li>
    </Icons>
    <NetlifyLogo href="https://netlify.com">
      <Image
        width={30}
        height={30}
        src={netlifySvg}
        alt="Netlify"
        style={{ background: "transparent" }}
      />
    </NetlifyLogo>
  </FooterContainer>
);

export default Footer;
