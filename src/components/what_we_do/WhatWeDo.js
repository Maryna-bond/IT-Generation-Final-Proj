import React, { Component } from 'react';
import "./WhatWeDo.scss";

class WhatWeDo extends Component {
  render() {
    return (
      <section className="what-we-do">
        <div className="what-we-do__content">
          <p className="what-we-do__subtitle">WHAT WE DO</p>
          <h1 className="what-we-do__title">Our Service</h1>
          <ul className='what-we-do__nav__list'>
              <li className='what-we-do__nav__list-item'>ALL</li>
              <li className='what-we-do__nav__list-item'>INTERIOR DESIGN</li>
              <li className='what-we-do__nav__list-item'>ARCHITECTURE</li>
              <li className='what-we-do__nav__list-item'>PLANNING</li>
          </ul>
          <ul className='navbar__menu__list'>
            <li className='navbar__menu__list-item'>
              <img></img>
              <h3>Interior Design1</h3>
              <p>Lorem ipsum dolor amet consectetur
                adipiscing elit sed eiusmod tempor
                incididunt ut labore.</p>
              </li>
            <li className='navbar__menu__list-item'>
              <img></img>
              <h3>Architecture</h3>
              <p>Lorem ipsum dolor amet consectetur
                adipiscing elit sed eiusmod tempor
                incididunt ut labore.</p>
            </li>
            <li className='navbar__menu__list-item'>
              <img></img>
              <h3>Planning 1</h3>
              <p>Lorem ipsum dolor amet consectetur
                adipiscing elit sed eiusmod tempor
                incididunt ut labore.</p>
              </li>
            </ul>
        </div>
      </section>
    );
  }
}

export default WhatWeDo;