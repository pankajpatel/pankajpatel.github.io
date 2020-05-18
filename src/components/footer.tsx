import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

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
    border-radius: 100%;
    box-shadow: inset 0 0 0 1px #ffffff;
    display: inline-block;
    height: 2.25rem;
    line-height: 2.25rem;
    text-align: center;
    width: 2.25rem;
  }

  & li a:hover {
    background-color: rgba(255, 255, 255, 0.075);
  }

  & li a:active {
    background-color: rgba(255, 255, 255, 0.175);
  }
`;

const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          siteUrl
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
          <a href={site.siteMetadata.socialLinks.twitter} className="icon">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href={site.siteMetadata.socialLinks.instagram} className="icon">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href={site.siteMetadata.socialLinks.github} className="icon">
            <span className="label">GitHub</span>
          </a>
        </li>
      </Icons>
    </FooterContainer>
  );
};

export default Footer;
