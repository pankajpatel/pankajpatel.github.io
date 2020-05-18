import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

const Nav = styled.nav`
  ul {
    display: flex;
    margin-bottom: 0;
    list-style: none;
    padding-left: 0;
    border: solid 1px #ffffff;
    border-radius: 4px;
  }
  ul li {
    padding-left: 0;
    border-left: solid 1px #ffffff;
  }
  ul li:first-child {
    border-left: 0;
  }
  @media screen and (max-width: 480px) {
    & ul {
      -moz-flex-direction: column;
      flex-direction: column;
      min-width: 10rem;
      max-width: 100%;
    }
    & ul li {
      border-left: 0;
      border-top: solid 1px #ffffff;
    }
    & ul li:first-child {
      border-top: 0;
    }
    & ul li a {
      height: 3rem;
      line-height: 3rem;
      min-width: 0;
      width: 100%;
    }
  }
`;

const NavLink = styled(Link)`
  display: block;
  min-width: 7.5rem;
  height: 2.75rem;
  line-height: 2.75rem;
  padding: 0 1.25rem 0 1.45rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 0.8rem;
  font-family: "Source Sans Pro", sans-serif;
  border: none;
  box-shadow: none;
  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.075);
  }
  &:active {
    background-color: rgba(255, 255, 255, 0.175);
  }
`;

const Navigation = () => {
  const {
    allNavJson: { nodes: menuItems },
  } = useStaticQuery(
    graphql`
      query {
        allNavJson {
          nodes {
            article
            label
          }
        }
      }
    `
  );
  return (
    <Nav>
      <ul>
        {menuItems.map((item: Record<string, string>) => (
          <li key={item.article}>
            <NavLink to={`/${item.article}`}>{item.label}</NavLink>
          </li>
        ))}
      </ul>
    </Nav>
  );
};
export default Navigation;
