import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import GithubSvg from "../svg/github.svg";
import LinkedinSvg from "../svg/linkedin.svg";
import TwitterSvg from "../svg/twitter.svg";
import InstagramSvg from "../svg/instagram.svg";

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

  & .icon svg {
    width: 100%;
    height: 100%;
    & path {
      stroke: #fff;
      stroke-width: 8px;
    }
  }
`;

const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          socialLinks {
            twitter
            instagram
            github
            linkedin
          }
        }
      }
    }
  `);

  return (
    <FooterContainer>
      <Icons>
        <li>
          <a href={site.siteMetadata.socialLinks.linkedin} className="icon">
            <LinkedinSvg />
          </a>
        </li>
        <li>
          <a href={site.siteMetadata.socialLinks.github} className="icon">
            <GithubSvg />
          </a>
        </li>
        <li>
          <a href={site.siteMetadata.socialLinks.twitter} className="icon">
            <TwitterSvg />
          </a>
        </li>
        <li>
          <a href={site.siteMetadata.socialLinks.instagram} className="icon">
            <InstagramSvg />
          </a>
        </li>
      </Icons>
    </FooterContainer>
  );
};

export default Footer;
