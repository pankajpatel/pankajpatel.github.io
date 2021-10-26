import styled from "styled-components";
import React, { PropsWithChildren } from "react";
import { useStaticQuery, graphql } from "gatsby";

type LoadingProp = {
  loading?: boolean;
};

const transitionDelay = "transition-delay: 250ms;";

const Logo = styled.div<LoadingProp>`
  ${({ loading }) => `
    --logoSize: ${loading ? "0rem" : "5.5rem"};
    transition: all 525ms ease !important;
    ${transitionDelay}
    width: var(--logoSize);
    height: var(--logoSize);
    line-height: var(--logoSize);
    border: solid 1px #ffffff;
    border-radius: 100%;
    overflow: hidden;
    padding: 4px;
    box-sizing: border-box;
    & img {
      border-radius: 100%;
      width: 100%;
      height: 100%;
    }

    @media screen and (max-width: 736px) {
      width: 4.75rem;
      height: 4.75rem;
      line-height: 4.75rem;
    }
  `}
`;

const Name = styled.h1`
  transition: all 1.25s ease;
  ${transitionDelay}
`;
const Role = styled.p`
  transition: all 1.25s ease;
  ${transitionDelay}
  font-size: 0.8rem;
  line-height: 2;
  @media screen and (max-width: 736px) {
    line-height: 1.875;
  }
`;

const Inner = styled.div<LoadingProp>`
  ${({ loading }) => `
    max-height: 40rem;
    overflow: hidden;
    text-transform: uppercase;
    transition: max-height 0.75s ease, padding 0.75s ease, opacity 0.325s ease-in-out;
    ${transitionDelay}

    & > :last-child {
      margin-bottom: 0;
    }
    @media screen and (max-width: 736px) {
      padding: 2.5rem 1rem;
    }
    @media screen and (max-width: 480px) {
      padding: 2.5rem 0;
    }

    ${
      loading
        ? `
      opacity: 0;
      padding: 1rem;
      ${Name} { letter-spacing: -5px; }
      ${Role} { letter-spacing: 0; }
      `
        : `
      opacity: 1;
      padding: 3rem 2rem;;
      ${Name} { letter-spacing: 8px; }
      ${Role} { letter-spacing: 5px; }
      `
    }
  `}
`;

const Content = styled.div`
  border: 0;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  max-width: 100%;
`;

const Header = styled.header<{ bg?: string; loading?: boolean }>`
  ${({ loading, bg }) => `
    --logoSize: ${loading ? "0rem" : "5.5rem"};
    justify-content: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    text-align: center;
    transition: all 0.325s ease-in-out;
    opacity: ${loading ? 0 : 1};
    position: relative;
    &:after,
    &:before {
      content: ' ';
      position: absolute;
      top: 0;
      left: 50%;
      height: 100%;
      width: 100%;
      transform: translateX(-50%);
      background-image:
        radial-gradient(rgba(0,0,0,0), rgba(34, 34, 34, 0.15)),
        radial-gradient(rgba(0,0,0,0.65) 26%, rgba(0,0,0,0) 100% ),
        radial-gradient(ellipse at center, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 75%,rgba(0,0,0,0.7) 100%);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      }
    ${
      bg &&
      `&:after {
        z-index: -1;
        width: 100%;
        transform: translateX(-50%);
        background-image: url(${bg});
    }`
    }

    & > * {
      transition: opacity 0.325s ease-in-out;
      position: relative;
      margin-top: 3.5rem;
    }
    & > *:before {
      content: "";
      display: block;
      position: absolute;
      top: calc(-3.5rem - 1px);
      left: calc(50% - 1px);
      width: 1px;
      height: calc(3.5rem + 1px);
      background: #ffffff;
    }
    & > :first-child {
      margin-top: 0;
    }
    & > :first-child:before {
      display: none;
    }

    @media screen and (max-width: 736px) {
      & > * {
        margin-top: 2rem;
      }
      & > *:before {
        top: calc(-2rem - 1px);
        height: calc(2rem + 1px);
      }
    }
    @media screen and (max-width: 480px) {
      padding: 1.5rem 0;
    }
  `}
`;

const SiteHeader = ({
  loading = true,
  children,
}: PropsWithChildren<LoadingProp>) => {
  const { profileImg, bgImg, site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          subTitle
        }
      }
      profileImg: file(relativePath: { eq: "pankaj.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            src
          }
        }
      }
      bgImg: file(relativePath: { eq: "homepage-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            src
          }
        }
      }
    }
  `);
  return (
    <Header id="header" loading={loading} bg={bgImg.childImageSharp.fluid.src}>
      <Logo loading={loading}>
        <img
          src={profileImg.childImageSharp.fluid.src}
          alt={site.siteMetadata.title}
        />
      </Logo>
      <Content className="content">
        <Inner loading={loading}>
          <Name>{site.siteMetadata.title}</Name>
          <Role>{site.siteMetadata.subTitle}</Role>
        </Inner>
      </Content>
      {children}
    </Header>
  );
};

export default SiteHeader;
