import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Nav from "../components/Nav";

const Logo = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  line-height: 5.5rem;
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
    & .icon:before {
      font-size: 1.75rem;
    }
  }
`;

const Inner = styled.div`
  transition: max-height 0.75s ease, padding 0.75s ease,
    opacity 0.325s ease-in-out;
  transition-delay: 0.25s;
  padding: 3rem 2rem;
  max-height: 40rem;
  overflow: hidden;
  text-transform: uppercase;

  & > :last-child {
    margin-bottom: 0;
  }
  @media screen and (max-width: 736px) {
    padding: 2.5rem 1rem;
  }
  @media screen and (max-width: 480px) {
    padding: 2.5rem 0;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.325s ease-in-out, opacity 0.325s ease-in-out,
    -webkit-filter 0.325s ease-in-out;
  transition: transform 0.325s ease-in-out, filter 0.325s ease-in-out,
    opacity 0.325s ease-in-out;
  transition: transform 0.325s ease-in-out, filter 0.325s ease-in-out,
    opacity 0.325s ease-in-out, -webkit-filter 0.325s ease-in-out;
  background-image: radial-gradient(
    rgba(0, 0, 0, 0.25) 25%,
    rgba(0, 0, 0, 0) 55%
  );
  max-width: 100%;
  text-align: center;

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

  & .content {
    border: 0;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    max-width: 100%;
  }

  & .content p {
    font-size: 0.8rem;
    line-height: 2;
  }

  .body.is-article-visible & {
    transform: scale(0.95);
    opacity: 0;
  }
  .body.is-loading & > * {
    opacity: 0;
  }
  .body.is-loading & .content .inner {
    max-height: 0;
    padding-top: 0;
    padding-bottom: 0;
    opacity: 0;
  }
  @media screen and (max-width: 980px) {
    & .content p br {
      display: none;
    }
  }
  @media screen and (max-width: 736px) {
    & > * {
      margin-top: 2rem;
    }
    & > *:before {
      top: calc(-2rem - 1px);
      height: calc(2rem + 1px);
    }

    & .content p {
      line-height: 1.875;
    }
  }
  @media screen and (max-width: 480px) {
    & {
      padding: 1.5rem 0;
    }
  }
`;

const CenteredHeader = styled(Header)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  min-height: 100%;
`;

const IndexPage = () => {
  const { profileImg } = useStaticQuery(graphql`
    query {
      profileImg: file(relativePath: { eq: "pankaj.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            src
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Home" />
      <CenteredHeader id="header">
        <Logo>
          <img src={profileImg.childImageSharp.fluid.src} alt="Pankaj" />
        </Logo>
        <div className="content">
          <Inner>
            <h1>Pankaj Patel</h1>
            <p>Frontend Engineer</p>
          </Inner>
        </div>
        <Nav />
      </CenteredHeader>
    </Layout>
  );
};
export default IndexPage;
