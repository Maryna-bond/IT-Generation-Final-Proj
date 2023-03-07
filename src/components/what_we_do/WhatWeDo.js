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
          <ul className='what-we-do__content__list'>
            <li className='what-we-do__content__list-item1'>
              <span class="icon">
                <img className='what-we-do__content__list-item__logo' src="./img/what-we-do_icon1.png" alt="icon" />
                <h3>Interior Design1</h3>
                <p>Lorem ipsum dolor amet consectetur
                  adipiscing elit sed eiusmod tempor
                  incididunt ut labore.</p>
              </span>
            </li>
            <li className='what-we-do__content__list-item2'>
              <span class="icon">
                <img className='what-we-do__content__list-item__logo' src="./img/what-we-do_icon2.png" alt="icon" />
                <h3>Architecture</h3>
                <p>Lorem ipsum dolor amet consectetur
                  adipiscing elit sed eiusmod tempor
                  incididunt ut labore.</p>
            </span>
            </li>
            <li className='what-we-do__content__list-item3'>
              <span class="icon">
              <img className='what-we-do__content__list-item__logo' src="./img/what-we-do_icon3.png" alt="icon" />
              <h3>Planning 1</h3>
              <p>Lorem ipsum dolor amet consectetur
                adipiscing elit sed eiusmod tempor
                incididunt ut labore.</p>
              </span>
            </li>
          </ul>
          
          <img className='what-we-do__background-dots' src="./img/what-we-do_dots.png" alt="icon" />
        </div>
      </section>
    );
  }
}

export default WhatWeDo;