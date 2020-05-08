import PropTypes from 'prop-types';
import React from 'react';
import picture from '../images/pankaj.jpg'
const menuItems = [
  {
    label: 'Intro',
    article: 'intro',
  },
  {
    label: 'Work',
    article: 'work',
  },
  {
    label: 'Education',
    article: 'education',
  },
  {
    label: 'Skills',
    article: 'skills',
  },
  {
    label: 'Contact',
    article: 'contact',
  },
]
const Header = ({ timeout, onOpenArticle }) => (
  <header id="header" style={timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src={picture} alt="Pankaj" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Pankaj Patel</h1>
        <p>Frontend Engineer</p>
      </div>
    </div>
    <nav>
      <ul>
        {
          menuItems.map(item => (
            <li key={item.article}>
              <button
                onClick={() => onOpenArticle(item.article)}
              >
                {item.label}
              </button>
            </li>
          ))
        }
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
