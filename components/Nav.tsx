import React from "react";
import ScrollAnim from "rc-scroll-anim";
import styled from "styled-components";
import menuItems from "../data/nav.json";

const NavLinks = styled.ul``;

const NavLink = styled(ScrollAnim.Link)`
  display: block;
  min-width: 7.5rem;
  height: 2.75rem;
  line-height: 2.75rem;
  padding: 0 1.25rem 0 1.45rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 0.8rem;
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.075);
  }
  &:active {
    background-color: rgba(255, 255, 255, 0.175);
  }
`;

const Nav = styled.nav`
  ${NavLinks} {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    margin-bottom: 0;
    list-style: none;
    padding-left: 0;
    border: solid 1px #ffffff;
    border-radius: 4px;
  }
  ${NavLinks} li {
    padding-left: 0;
    border-left: solid 1px #ffffff;
  }
  ${NavLinks} li:first-child {
    border-left: 0;
  }
  @media screen and (max-width: 480px) {
    & ${NavLinks} {
      -moz-flex-direction: column;
      flex-direction: column;
      min-width: 10rem;
      max-width: 100%;
    }
    & ${NavLinks} li {
      border-left: 0;
      border-top: solid 1px #ffffff;
    }
    & ${NavLinks} li:first-child {
      border-top: 0;
    }
    & ${NavLinks} li ${NavLink} {
      height: 3rem;
      line-height: 3rem;
      min-width: 0;
      width: 100%;
    }
  }
`;

const Navigation = () => (
  <Nav>
    <NavLinks>
      {menuItems.map((item: Record<string, string>) => (
        <li key={item.article}>
          <NavLink to={`/${item.article}`}>{item.label}</NavLink>
        </li>
      ))}
    </NavLinks>
  </Nav>
);

export default Navigation;
