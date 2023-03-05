import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  
  render() {
    return (
      <div className="header">
        <div className="navbar">
          <a className="header_logo" src="" href="./index.html">
            <img src="./img/logo.png" alt="decbase-logo" />
          </a>
          <div className="navbar__menu">
            <ul className='navbar__menu__list'>
              <li className='navbar__menu__list-item'>HOME</li>
              <li className='navbar__menu__list-item'>PROJECT</li>
              <li className='navbar__menu__list-item'>SERVICES</li>
              <li className='navbar__menu__list-item'>ABOUT</li>
              <li className='navbar__menu__list-item'>BLOG</li>
              <li className='navbar__menu__list-item'>SHOP</li>
              <li className='navbar__menu__list-item'>CONTACT</li>
            </ul>
            <button className="navbar__menu__signup-button" type="button">Sign Up</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;