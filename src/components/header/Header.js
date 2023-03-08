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
            <a className="navbar__menu__list-item" href="#home">HOME</a>
            <a className="navbar__menu__list-item" href="#project">PROJECT</a>
            <a className="navbar__menu__list-item" href="#services">SERVICES</a>
            <a className="navbar__menu__list-item" href="#about">ABOUT</a>
            <a className="navbar__menu__list-item" href="#blog">BLOG</a>
            <a className="navbar__menu__list-item" href="#shop">SHOP</a>
            <a className="navbar__menu__list-item" href="#contact">CONTACT</a>
          
            <button className="navbar__menu__signup-button" type="button"><a className='button' href="#signup">Sign Up</a></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;