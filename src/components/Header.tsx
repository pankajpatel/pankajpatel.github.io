import React from "react"
import { Link } from "gatsby";
import styled from "styled-components";
import picture from "../images/pankaj.jpg"
import menuItems from '../data/nav.json';

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
`

const Header = () => (
  <header id="header" >
    <div className="logo">
      <img src={picture} alt="Pankaj" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Pankaj Patel</h1>
        <p>Frontend Engineer</p>
      </div>
    </div>
    <Nav>
      <ul>
        {menuItems.map(item => (
          <li key={item.article}>
            <NavLink to={`/${item.article}`} >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </Nav>
  </header>
);

export default Header
