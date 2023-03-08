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
              <li className='navbar__menu__list-item'><a href="#">HOME</a></li>
              <li className='navbar__menu__list-item'><a href="#">PROJECT</a></li>
              <li className='navbar__menu__list-item'><a href="#">SERVICES</a></li>
              <li className='navbar__menu__list-item'><a href="#">ABOUT</a></li>
              <li className='navbar__menu__list-item'><a href="#">BLOG</a></li>
              <li className='navbar__menu__list-item'><a href="#">SHOP</a></li>
              <li className='navbar__menu__list-item'><a href="#">CONTACT</a></li>
            </ul>
            <button className="navbar__menu__signup-button" type="button"><a className='button'>Sign Up</a></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;